import React from 'react';
import ReactDOM from 'react-dom';

import './common/style/main.css';

import sky from './common/img/front.jpg';

ReactDOM.render(
    <div>
        <h1 className="ot">Hello, React.</h1>
        <img src={ sky } alt="" />
    </div>,
    document.getElementById('app')
);