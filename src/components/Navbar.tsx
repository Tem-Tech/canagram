import NavMenu from './Navmenu';
import SettingsMenu from './Settingsmenu';
import './../styles/__Navbar.scss';

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
    
        <NavMenu />

      <SettingsMenu />
     
      
    </nav>
  );
};

export default Navbar;