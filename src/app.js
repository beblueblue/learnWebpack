import React from 'react';
import ReactDOM from 'react-dom';

let ss = 'ss';
() => {
    console.log('块级作用域变量：' + ss);
};
let a = {a: 1, b: 2};
let c = {...a, c: 3};

class normalC{

}

ReactDOM.render(
    <div>
        Hello React!
    </div>,
    document.getElementById('app')
);