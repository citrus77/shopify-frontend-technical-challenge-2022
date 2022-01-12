import React, { useState } from 'react';
import { Gallery, Header } from '.';
import './App.css';

const { REACT_APP_NASA_API_KEY } = process.env;

const App = () => {
  const [ gallery, setGallery ] = useState([]);

  console.log(gallery)

  const fetchImages = async () => {
    //fetch images from NASA Mars Photos and set state
    try {
      const resp = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${REACT_APP_NASA_API_KEY}`)
      const result = await resp.json();
      setGallery(result.latest_photos);
      return result;
    } catch (error) {
      console.error(error);
    };
  };

  return <div id='App'>
    <Header fetchImages={fetchImages} />
    <Gallery fetchImages={fetchImages} gallery={gallery} setGallery={setGallery} />
  </div>
};

export default App;