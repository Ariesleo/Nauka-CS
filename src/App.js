import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import HomePage from './page/home';
import NotFound from './page/NotFound404';
import './App.css';
import G20Summit from './page/G20-summit';

class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<G20Summit />} />
        </Routes>
      </BrowserRouter>
    );
  };
}

export default App;
