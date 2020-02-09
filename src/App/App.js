import React, { useState, useEffect } from 'react';
import { getAllProjects, getAllPalettes } from '../util/apiCalls';
import './App.scss';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjects();
        console.log('response', response)
        setProjects(response.projects);
     // dispatch(setAllProjects(response));
      } catch(error) {
          console.log(error);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Palette Picker</p>
      </header>
    </div>
  );
}

export default App;
