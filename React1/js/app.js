import React from 'react';
import ReactDOM from 'react_dom';

class MyComponentClass extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);