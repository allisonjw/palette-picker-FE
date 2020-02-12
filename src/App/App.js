import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ColorContainer from '../ColorContainer/ColorContainer';
// import PaletteForm from '../PaletteForm/PaletteForm';
import ProjectForm from '../ProjectForm/ProjectForm';


const App = () => {

  return (
    <div className="App">
        <Header />
        <ColorContainer/>
        {/* <PaletteForm /> */}
        <ProjectForm />
        <ProjectContainer/>
    </div>
  );
}

export default App;
