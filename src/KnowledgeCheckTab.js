// KnowledgeCheckTab.js
import React, { useState } from 'react';
import './KnowledgeCheckTab.css';

const KnowledgeCheckTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thanks for your message! I'll generate a quiz for you.", 
          sender: 'bot' 
        }]);
      }, 1000);
      setInputText('');
    }
  };

  return (
    <div className={`tab-container ${isOpen ? 'open' : ''}`}>
      <div className="tab" onClick={toggleOpen}>
        Check your knowledge
      </div>
      {isOpen && (
        <div className="content">
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-input-form">
              <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="chat-input"
              />
              <button type="submit" className="send-button">Send</button>
            </form>
          </div>
          <div className="button-container">
            <button onClick={() => alert('Generate quiz')}>Generate Quiz</button>
            <button onClick={toggleOpen}>Return to the Story</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeCheckTab;