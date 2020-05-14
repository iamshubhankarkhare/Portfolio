import React from 'react';
import './App.css';
import Space from './components/space/Space'
import Intro from './components/Intro/Intro'
import Nav from './components/Nav/Nav'
import Audio from './components/Audio/Audio'

function App() {
  return (
    <div className="App">
      <Space></Space>
      <div className="contentWrapper">
        <Intro></Intro>
        <Nav></Nav>
        <Audio></Audio>
      </div>
    </div>
  );
}

export default App;
