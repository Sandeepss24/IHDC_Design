import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Forms from './components/Forms';
import Design1 from './components/Design1';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
        <Route path='/' element={<Design1/>}></Route>
          <Route path='/form' element={<Forms/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
