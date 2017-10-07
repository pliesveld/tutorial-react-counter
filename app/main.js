import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './main.css';

let items = [
  { itemName: 'hobby item #1', value: 1 },
  { itemName: 'pack of cards', value: 6 },
  { itemName: 'books', value: 60 },
  { itemName: 'pairs of shoes', value: 0 },
];

render(<App items={items} />, document.getElementById('root'));

