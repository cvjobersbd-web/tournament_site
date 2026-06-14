// App.jsx - Updated with 404 route
import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tournaments from './pages/Tournaments';
import AvailableGames from './pages/AvailableGames';
import Contact from './pages/Contact';
import TournamentRegistration from './pages/TournamentRegistration';
import Notices from './pages/Notices';
import NotFound from './pages/NotFound'; // Add this import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="tournament-registration" element={<TournamentRegistration />} />
        <Route path="available-games" element={<AvailableGames />} />
        <Route path="notices" element={<Notices />} />
        <Route path="contact" element={<Contact />} />
        {/* 404 - Catch all route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;