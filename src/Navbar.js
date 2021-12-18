import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Navbar = () => {
  const { openSidebar, openModal, closeModal } = useGlobalContext();
  const displaySubMenu = (e) => {
    const targetButton = e.target.textContent;
    const position = e.target.getBoundingClientRect();
    const center = (position.left + position.right) / 2;
    const botton = position.botton - 3;

    openModal(targetButton, { center, botton });
  };
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeModal();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
