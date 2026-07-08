import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import './Chatbot.css';

const initialMessages = [
  { sender: 'bot', text: 'Hello! I am the HRG Premium Real Estate Advisor. How can I assist you with our luxury properties today?' }
];

const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes('verantes') || lowerInput.includes('residential')) {
    return "VERÁNTES® is our ultra-luxurious 4 BHK Terrace Apartments project in Thaltej. Would you like to schedule a site visit?";
  }
  if (lowerInput.includes('mercado') || lowerInput.includes('cross roads') || lowerInput.includes('jewel park') || lowerInput.includes('commercial')) {
    return "We have several premium commercial properties including Mercádo®, Cross Roads, and The Jewel Park®. They offer state-of-the-art retail and corporate spaces. Which one interests you?";
  }
  if (lowerInput.includes('price') || lowerInput.includes('cost')) {
    return "Our properties are tailored for high-end luxury. Prices vary based on the specific project and requirements. Please leave your contact number and our sales director will reach out to you directly.";
  }
  if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('call')) {
    return "You can reach our Sales team directly at +91 99787 93795 or email us at sales@hrgconstruction.com.";
  }
  return "I'd love to tell you more about HRG Construction's world-class projects. Could you provide a bit more detail about what you are looking for?";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking
    setTimeout(() => {
      const botReply = { sender: 'bot', text: getBotResponse(userMessage.text) };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window glass-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-title">
                <Bot size={20} />
                <div>
                  <h4>HRG Assistant</h4>
                  <span>Real Estate Advisor</span>
                </div>
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <div className="message-content">{msg.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
