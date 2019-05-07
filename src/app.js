import React from 'react';
import ReactDOM from 'react-dom';

import './common/style/font.css';

import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <div>
        Hello React!
        <span className="icon-yifukuan"></span>
        <span className="fa fa-rocket"></span>
    </div>,
    document.getElementById('app')
);