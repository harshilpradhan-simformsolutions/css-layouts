import { Routes, Route } from 'react-router-dom';
import { Result } from './challenges';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
