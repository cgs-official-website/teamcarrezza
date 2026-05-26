import { google } from 'googleapis';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = formidable({});
  
  try {
    const [fields, files] = await form.parse(req);
    const resumeFile = files.resume[0];
    const candidateName = fields.candidateName[0];

    if (!resumeFile) {
      return res.status(400).json({ error: 'No resume file uploaded' });
    }

    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    auth.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const drive = google.drive({ version: 'v3', auth });

    const extension = resumeFile.originalFilename.split('.').pop();
    const fileMetadata = {
      name: `${candidateName}_Resume.${extension}`,
      parents: [process.env.GOOGLE_DRIVE_RESUMES_FOLDER_ID || process.env.GOOGLE_DRIVE_FOLDER_ID],
    };

    const media = {
      mimeType: resumeFile.mimetype,
      body: fs.createReadStream(resumeFile.filepath),
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id, webViewLink',
    });

    // Make the file readable to anyone with the link (optional, but good for admin panel)
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    return res.status(200).json({
      fileId: response.data.id,
      fileUrl: response.data.webViewLink,
    });

  } catch (error) {
    console.error('Google Drive Upload Error:', error);
    return res.status(500).json({ error: 'Failed to upload to Google Drive', details: error.message });
  }
}
