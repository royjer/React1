import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from '../components/topNav.jsx'
import Footer from '../components/footer.jsx'

class MyComponentClass extends React.Component {
    render() {
        return <div className="main"><h3>Hello world2 Makin a little change.xxxxx.</h3></div>
    }
};
ReactDOM.render(
    <div ><TopNav /><MyComponentClass  /><Footer /></div>,
  document.getElementById('app')
);

