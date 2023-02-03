import React from 'react';
import './style.css';
import WindowTracker from './WindowTracker';

export default function App() {
  return (
    <div>
      <h3> I am tracking window size</h3>
      <hr />
      <WindowTracker />
    </div>
  );
}
