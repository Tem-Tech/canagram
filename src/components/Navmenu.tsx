import { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from './../assets/canagram.svg';
import blackcross from './../assets/cross.svg';
import './../styles/__navmenu.scss';

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav-menu">
      
      <img
        src={menu}
        className="nav-menu__icon"
        alt="menu icon"
        onClick={handleToggleMenu}
        aria-label="Toggle menu"
      />

      
      {showMenu && (
        <div className="nav-menu__content">
          
          <img
            className="nav-item__cross"
            src={blackcross}
            alt="close menu"
            onClick={handleToggleMenu}
            aria-label="Close menu"
          />
          <ul className="nav-menu__links">
            <li>
              <Link to="/canagram" className="navbar__link" onClick={handleToggleMenu}
              >Home
              </Link>
            </li>
            <li>
              <Link to="/canagram/page1" className="navbar__link" onClick={handleToggleMenu}>Word Finder</Link>
            </li>
            <li>
              <Link to="/canagram/dictionary" className="navbar__link" onClick={handleToggleMenu}>Dictionary Mode</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMenu;