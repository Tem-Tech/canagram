import { Link } from 'react-router-dom';
import './../styles/__button.scss';

const Buttons = () => {
  return (
    <div>
      <Link to="/canagram/page1">
        <button className="pageButtons">Anagram Mode</button>
      </Link>
      <Link to="/canagram/dictionary">
        <button className="pageButtons">Dictionary Mode</button>
      </Link>
    </div>
  );
};

export default Buttons;
