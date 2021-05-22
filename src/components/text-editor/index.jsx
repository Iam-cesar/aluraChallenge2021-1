import React from 'react';
import './style.css';

const textEditor = () => {

  return (
    <div className="text-editor__container">
      <div className="text-editor__background">
        <div className="text-editor__dots">
          <span className="text-editor__dots-item"></span>
          <span className="text-editor__dots-item"></span>
          <span className="text-editor__dots-item"></span>
        </div>
        <div className="text-editor__text-input">
          <textarea className="text-editor"></textarea>
        </div>
      </div>
    </div>
  );
};

export default textEditor;