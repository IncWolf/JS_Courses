/**
 * Created by IncWolf on 17.09.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import First from './first.js';
import Second from './second.js'

ReactDOM.render(<First><Second /></First>, document.getElementById('output'));