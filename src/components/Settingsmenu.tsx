import { useState } from 'react';
import settings from './../assets/settings.svg';
import blackcross from './../assets/cross.svg';
import './../styles/__settings.scss';

const SettingsMenu = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleToggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="settings-menu">
      
      <img
        src={settings}
        className="navbar__item"
        alt="settings icon"
        onClick={handleToggleSettings}
      />
      {showSettings && (
        <div className="settings-menu">
          
    <img
            className="nav-item__cross"
            src={blackcross}
            alt="close menu"
            onClick={handleToggleSettings}
            aria-label="Close menu"
          />          <button className="navbar__theme-toggle">Toggle Theme</button>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;