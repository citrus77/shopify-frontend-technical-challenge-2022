import React, { useState } from 'react';
import { Gallery, Header } from '.';
import './App.css';

const App = () => {
    const [ gallery, setGallery ] = useState([]);
    return <div id='App'>
      <Header />
      <Gallery gallery={gallery} setGallery={setGallery} />
    </div>
};

export default App;