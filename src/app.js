import React from 'react';
import ReactDOM from 'react-dom';

import main from './common/style/main.css';
import page from './common/style/page.css';
console.log(main)

ReactDOM.render(
    <div className={ main.ut + ' ' + main.ot }>
        Hello React!
        <span className={ page.ot }>黄色</span>
    </div>,
    document.getElementById('app')
);