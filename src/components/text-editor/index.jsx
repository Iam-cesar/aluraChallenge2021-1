import React from 'react';
import './style.css';

const textEditor = ({ bgColor, textValue, children }) => {

  return (
    <div style={{ border: `2rem solid ${bgColor}`, backgroundColor: `${bgColor}` }} className="text-editor__container">
      <div className="text-editor__background">
        <div className="text-editor__dots-export-container">
          <div className="text-editor__dots">
            <span className="text-editor__dots-item"></span>
            <span className="text-editor__dots-item"></span>
            <span className="text-editor__dots-item"></span>
          </div>
          {children}
        </div>
        <pre className="text-editor__text-codigo-wrapper">
          <code className="text-editor" suppressContentEditableWarning={true} contentEditable='true' aria-label='editor' >{textValue}</code>
        </pre>
      </div>
    </div>
  );
};

export default textEditor;