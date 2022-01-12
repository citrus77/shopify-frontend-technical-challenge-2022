import React, { useState } from 'react';
import { Gallery, Header } from '.';
import './App.css';

const App = () => {
    const [ gallery, setGallery ] = useState([]);
    const [ rover, setRover ] = useState('curiosity');
    return <div id='App'>
      <Header />
      <Gallery gallery={gallery} setGallery={setGallery} rover={rover} />
    </div>
};

export default App;