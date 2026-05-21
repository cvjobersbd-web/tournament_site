import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Tournaments from './pages/Tournaments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="tournaments" element={<Tournaments />} />
      </Route>
    </Routes>
  );
}

export default App;