import React from 'react';
import ReactDOM from 'react-dom';

import './common/style/main.css';

import front from './common/img/front.jpg';
import bg_red from './common/img/bg_red.jpg';
const bottom = require('./common/img/bottom.jpg');

console.log(bottom);

ReactDOM.render(
    <div>
        <h1 className="ot">Hello, React.</h1>
        <img src={ front } alt="" />
        <img src={ bg_red } alt="" />
        <img src={ bottom } alt="" />
        <img src={ require('./common/img/right.jpg') } alt="" />
    </div>,
    document.getElementById('app')
);