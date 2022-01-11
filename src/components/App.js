import React, { useState } from 'react';
import { Gallery } from '.';

const App = () => {
    const [ gallery, setGallery ] = useState([]);
    return <div>
      <Gallery gallery={gallery} setGallery={setGallery} />
    </div>
};

export default App;