import React, { useState } from 'react';
import Cozybot from './Cozybot';
import Cozybotbutton from './Cozybotbutton';
import '../css/Cozybot.css'


const ChatContainer = () => {
  // State to track if chat is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-system-wrapper">
      {/* 1. The Floating Button */}
      <div onClick={toggleChat}>
        <Cozybotbutton />
      </div>

      {/* 2. The Chat Window (Condition: Only show if isOpen is true) */}
      {isOpen && (
        <div className="chat-window-overlay">
          {/* We pass toggleChat as a prop so the "X" inside the bot can close it */}
          <Cozybot onClose={toggleChat} />
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
