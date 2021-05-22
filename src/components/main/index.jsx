import React from 'react';
import './style.css';

const Main = ({children}) => {
  return (
    <section>
      <main className="main">
        {children}
      </main>
    </section>
  );
};

export default Main;