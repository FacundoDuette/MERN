import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Songs</Link></li>
        <li><Link to="/playlists">Playlists</Link></li>
        <li><Link to="/add-song">Add Song</Link></li>
        <li><Link to="/add-playlist">Add Playlist</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;