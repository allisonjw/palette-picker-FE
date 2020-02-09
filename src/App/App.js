
import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { getAllProjects, getAllPalettes } from '../util/apiCalls';
import './App.scss';

const App = () => {
  // const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjects();
        console.log('responseProjects', response)
        setProjects(response.projects);
     // dispatch(setAllProjects(response));
      } catch(error) {
          console.log(error);
      }
    };
    fetchProjects();
  }, []);


  useEffect(() => {
    const fetchPalettes = async () => {
      try {
        const response = await getAllPalettes();
        console.log('responsePalettes', response)
        setPalettes(response.palettes);
     // dispatch(setAllPalettes(response));
      } catch(error) {
          console.log(error);
      }
    };
    fetchPalettes();
  }, []);

  // if (loading) {
  //   return <h2>Loading...</h2>
  // };

  return (
    <div className="App">
      <header className="App-header">
        <p>Palette Picker</p>
      </header>
    </div>
  );
}

export default App;
