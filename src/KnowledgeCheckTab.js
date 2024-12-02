import React, { useState } from 'react';
import './KnowledgeCheckTab.css';

const KnowledgeCheckTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleTakeQuiz = () => {
    alert('Take Quiz button clicked!');
  };

  return (
    <div className={`tab-container ${isOpen ? 'open' : ''}`}>
      <div className="tab" onClick={toggleOpen}>
        Check your knowledge
      </div>
      {isOpen && (
        <div className="content">
          <div className="quiz-container">
            <h2 className="quiz-title">Check your knowledge</h2>
            <p className="quiz-text">
              Want to test your knowledge of this story?
            </p>
            <button className="quiz-button" onClick={handleTakeQuiz}>
              Take Quiz
            </button>
            <button className="return-button" onClick={toggleOpen}>
              Return to the Story
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeCheckTab;
