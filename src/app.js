import React from 'react';
import ReactDOM from 'react-dom';

import './common/style/main.css';
import './common/style/main.less';
import 'font-awesome/css/font-awesome.css';

// 模块化导入
import page from './page.css';
import pageScss from './scPage.scss';

ReactDOM.render(
    <div>
        Hello React!
        <span className={ page.ot }>黄色</span>
        <span className="fa fa-rocket"></span>
        <p className={ pageScss.scFont }>大号字</p>
        <p className="big-one">大号字</p>
    </div>,
    document.getElementById('app')
);