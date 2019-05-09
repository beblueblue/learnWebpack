import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <div>
        Hello React!
        <span className="fa fa-rocket"></span>
        <img src={require('./common/img/bottom.jpg')} alt="" />
        <img src={require('./common/img/bg_red.jpg')} alt="" />
    </div>,
    document.getElementById('app')
);