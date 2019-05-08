import React from 'react';
import ReactDOM from 'react-dom';

import './common/style/main.css';
import 'font-awesome/css/font-awesome.css';

import page from './page.css';
console.log(page)

ReactDOM.render(
    <div>
        Hello React!
        <span className={ page.ot }>黄色</span>
        <span className="fa fa-rocket"></span>
    </div>,
    document.getElementById('app')
);