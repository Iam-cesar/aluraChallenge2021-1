import React from 'react';
import './style.css';

const Main = (props) => {
  return (
    <section>
      <main className="main">
        {props.children}
      </main>
    </section>
  );
};

export default Main;