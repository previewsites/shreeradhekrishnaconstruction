import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import './Chatbot.css';

const initialMessages = [
  { sender: 'bot', text: 'Hello! I am the Shree Radhe Assistant. How can I help you with our painting, civil contracting, or renovation services today?' }
];

const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes('paint') || lowerInput.includes('colour') || lowerInput.includes('color') || lowerInput.includes('putty') || lowerInput.includes('pop')) {
    return "Shree Radhe specializes in high-quality colour work, decorative POP ceilings, and Birla putty finishes using premium products like Asian Paints Royale & Apex. Would you like to schedule an estimate?";
  }
  if (lowerInput.includes('civil') || lowerInput.includes('tiling') || lowerInput.includes('renovation') || lowerInput.includes('remodel') || lowerInput.includes('furniture') || lowerInput.includes('carpentry')) {
    return "We handle full office remodeling, home tiling, anti-skid bathroom waterproofing, custom laminate carpentry, and brick/concrete civil construction. All works are personally supervised by Satish bhai. What project are you planning?";
  }
  if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote') || lowerInput.includes('estimate')) {
    return "Our rates are highly transparent and competitive. We offer a free on-site evaluation in Ahmedabad to provide an accurate estimate. Please call Mr. Satish Rathod at +91 94267 58207 to schedule a time.";
  }
  if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('call') || lowerInput.includes('whatsapp') || lowerInput.includes('address')) {
    return "You can call or WhatsApp Mr. Satish Rathod at +91 94267 58207, or visit us at Lakshamikrupa Appartment, Naranpura, Ahmedabad.";
  }
  if (lowerInput.includes('satish') || lowerInput.includes('rathod') || lowerInput.includes('owner') || lowerInput.includes('proprietor')) {
    return "Mr. Satish Rathod (Satish bhai) is the founder and lead contractor of Shree Radhe, with over 15 years of hands-on civil and painting experience in Ahmedabad.";
  }
  return "I'd love to help you with your home or office renovation. Can you please specify if you are looking for painting, civil tiling, POP design, or carpentry?";
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
                  <h4>Shree Radhe Bot</h4>
                  <span>Colour & Civil Advisor</span>
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
                placeholder="Ask about painting, civil works..." 
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
