import React from 'react';
import './style.css';

const Navbar = ({children}) => {
  return (
    <section>
      <nav className="nav">
        {children}
      </nav>
    </section>
  );
};

export default Navbar;