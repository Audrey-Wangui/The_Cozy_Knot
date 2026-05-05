import React, { useState, useRef, useEffect } from 'react';
import { data } from "./cozy_data.js";


const Cozybot = ({onClose}) => {
  // 2. Added required state variables
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! I am Cozybot. How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const chatWindowRef = useRef(null);

  // 3. Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotResponse = (text) => {
    const userText = text.toLowerCase();
    for (let row of data) {
      if (!row.Keywords) continue;
      const keywordsList = row.Keywords.split(",");
      for (let word of keywordsList) {
        const cleanWord = word.trim().toLowerCase();
        const regex = new RegExp(`\\b${cleanWord}\\b`, "i");
        if (regex.test(userText)) {
          return row.Response;
        }
      }
    }
    return "Cozybot: Sorry, I don't know that one. Try asking for something else.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    
    const currentInput = input;
    setInput("");

    setTimeout(() => {
      const reply = getBotResponse(currentInput);
      const botMessage = { sender: "bot", text: reply };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  // 4. Handle 'Enter' key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="card">
      <div className="chat-header">
        <h3>CozyBot</h3>
        <p>Your Crochet Assistant</p>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="chat-window" ref={chatWindowRef}>
        <div className="message-list">
          {messages.map((msg, index) => (
            <div key={index} className={`message-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      <div className="chat-input">
        <input 
          type="text" 
          className="message-input" 
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Cozybot;
