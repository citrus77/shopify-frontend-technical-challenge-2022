import React, { useState } from 'react';
import { Gallery, Header, Spacer } from '.';
import utils from './utils';
import './css/App.css';

const { fetchImages } = utils;

const App = () => {
  const [ gallery, setGallery ] = useState([]);

  const handleFetchGallery = async () =>  {
    try {
        const fetchedImages = await fetchImages();
        setGallery(fetchedImages.latest_photos)            
    } catch (error) {
        console.error(error)
    };
};

  return <div id='App'>
    <Header fetchImages={fetchImages} />
    <Spacer />
    <Gallery
      fetchImages={fetchImages}
      gallery={gallery}
      handleFetchGallery={handleFetchGallery}
      setGallery={setGallery}
    />
  </div>
};

export default App;