import React from 'react';
import './style.css';

const Navbar = (props) => {
  return (
    <section>
      <nav className="nav">
        {props.children}
      </nav>
    </section>
  );
};

export default Navbar;