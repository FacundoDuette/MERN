import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPlaylist from './pages/AddPlaylist';
import Songs from './pages/Songs';
import Navbar from './components/Navbar';
import AddSong from './pages/AddSong';
import Playlists from './pages/Playlists';
import PlaylistDetails from "./pages/PlaylistDetails";
import UpdateSong from "./pages/UpdateSong";
import UpdatePlaylist from "./pages/UpdatePlaylist";
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
        <Route path="/update-song/:id" element={<UpdateSong />} />
        <Route path="/update-playlist/:id" element={<UpdatePlaylist />} />
      </Routes>
    </Router>
  );
}

export default App;