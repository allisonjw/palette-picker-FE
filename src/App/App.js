import React from 'react';
import './App.scss';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ColorContainer from '../ColorContainer/ColorContainer';


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>Palette Picker</p>
        <ProjectContainer/>
        <ColorContainer/>
      </header>
    </div>
  );
}

export default App;
