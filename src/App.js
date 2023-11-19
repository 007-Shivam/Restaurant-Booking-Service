import './App.css';
import Home from './pages/Home';

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}

export default App;
