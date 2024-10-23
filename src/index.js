import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css';
import App from './App';

const containerElement = document.querySelector('#root');

const root = createRoot(containerElement);

root.render(<App />);
