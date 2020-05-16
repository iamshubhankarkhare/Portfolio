import React from 'react';
import './App.css';
import Space from './components/space/Space'
import NavComp from './components/Nav/NavComp'
import Audio from './components/Audio/Audio'

function App() {
  return (
    <div className="App">
      <Space></Space>
      <div className="contentWrapper">
        <NavComp></NavComp>
        {/* <Audio></Audio> */}
      </div>
    </div>
  );
}

export default App;
