import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));

// notice that Matrix is the only component being rendered and it is passed a values prop
// the data is an array of arrays of strings, each representing a hex color
