import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPlaylist from './pages/AddPlaylist';
import Songs from './pages/Songs';
import Navbar from './components/Navbar';
import AddSong from './pages/AddSong';
import Playlists from './pages/Playlists';
import PlaylistDetails from "./pages/PlaylistDetails";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Songs />} />
        <Route path="/add-song" element={<AddSong />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/add-playlist" element={<AddPlaylist />} />
        <Route path="/playlists/:id" element={<PlaylistDetails />} />
      </Routes>
    </Router>
  );
}

export default App;