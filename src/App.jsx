import { Routes, Route } from 'react-router-dom';
import { InteractiveCardDetails, Result } from './challenges';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/card" element={<InteractiveCardDetails />} />
    </Routes>
  );
}

export default App;
