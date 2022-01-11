import React from 'react';
import ReactDOM from 'react-dom';
import {
  Gallery
} from './components';

const App = () => {
  return <div>
    <Gallery />
  </div>
}

const app = document.getElementById('app');
ReactDOM.createRoot(app).render(<App />);