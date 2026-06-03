import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2, Bot } from 'lucide-react';
import { useChat } from '../../hooks/useChat';
import ChatMessageBubble from './ChatMessageBubble';
import ChatTypingIndicator from './ChatTypingIndicator';
import { QUICK_REPLIES } from '../../data/knowledgeBase';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const { messages, isLoading, sendUserMessage, clearChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;
    setInputValue('');
    setShowQuickReplies(false);
    await sendUserMessage(text);
  };

  const handleQuickReply = async (reply: string) => {
    setShowQuickReplies(false);
    await sendUserMessage(reply);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    clearChat();
    setShowQuickReplies(true);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-5 right-5 z-[9999]">
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.button
              key="open-btn"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(true)}
              className="relative rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-xl shadow-blue-900/60 flex items-center justify-center cursor-pointer border border-blue-500/30"
              style={{ width: '52px', height: '52px' }}
              aria-label="Open Zuna AI Chat"
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-blue-500/25 animate-ping" />
              {/* Robot icon */}
              <Bot className="w-6 h-6 text-white relative z-10" />
              {/* AI Badge */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold shadow-md">
                AI
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="chat-window"
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10"
              style={{
                width: '300px',
                height: '440px',
                background: 'linear-gradient(to bottom, #0d1117, #0a0f1a)',
                transformOrigin: 'bottom right',
              }}
            >
              {/* ── Header ── */}
              <div className="relative px-3 py-2.5 border-b border-white/10 flex-shrink-0" style={{ background: 'linear-gradient(to right, rgba(30,58,138,0.8), rgba(49,46,129,0.8))' }}>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(37,99,235,0.1), rgba(79,70,229,0.1))' }} />
                <div className="relative flex items-center gap-2">
                  {/* Robot avatar */}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shadow-md flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #3b82f6, #4f46e5)' }}>
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  {/* Name + status */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-xs leading-none truncate">Zuna AI</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400 text-[10px]">Online • CGS Assistant</span>
                    </div>
                  </div>
                  {/* Action buttons */}
                  <div className="flex items-center gap-0.5">
                    <button
                      onClick={handleClear}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                      title="Clear chat"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                      title="Close"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* ── Messages Area ── */}
              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5" style={{ scrollbarWidth: 'thin' }}>
                {messages.map((msg) => (
                  <ChatMessageBubble key={msg.id} message={msg} compact />
                ))}
                {isLoading && <ChatTypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              {/* ── Quick Replies ── */}
              <AnimatePresence>
                {showQuickReplies && messages.length <= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="px-3 pb-1.5 flex flex-wrap gap-1"
                  >
                    {QUICK_REPLIES.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleQuickReply(reply)}
                        className="text-[10px] px-2 py-1 rounded-full border border-blue-500/40 text-blue-300 hover:bg-blue-600/20 hover:border-blue-400/60 transition-all whitespace-nowrap"
                      >
                        {reply}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Input Area ── */}
              <div className="px-3 py-2 border-t border-white/10 flex-shrink-0">
                <div className="flex items-center gap-1.5 rounded-xl border border-white/10 px-3 py-1.5 transition-all focus-within:border-blue-500/50" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about CGS..."
                    rows={1}
                    className="flex-1 bg-transparent text-white text-xs placeholder-gray-500 outline-none resize-none leading-relaxed"
                    style={{ maxHeight: '80px', overflowY: 'auto', scrollbarWidth: 'none' }}
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isLoading}
                    className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                      inputValue.trim() && !isLoading
                        ? 'text-white hover:scale-105'
                        : 'text-gray-500 cursor-not-allowed'
                    }`}
                    style={
                      inputValue.trim() && !isLoading
                        ? { background: 'linear-gradient(to bottom right, #2563eb, #4338ca)', boxShadow: '0 4px 6px rgba(37,99,235,0.3)' }
                        : { background: 'rgba(255,255,255,0.1)' }
                    }
                    aria-label="Send"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[9px] text-gray-600 text-center mt-1">
                  Zuna AI • Powered by Gemini
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
