import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
    Hello World
  </div>
}

const app = document.getElementById('app');
ReactDOM.createRoot(app).render(<App />);