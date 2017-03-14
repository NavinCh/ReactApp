import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';

ReactDom.render(<App headerProp="Header from props......." contentProp="Content from props....."/>, document.getElementById('app'));

setTimeout(() => {
	ReactDom.unmountComponentAtNode(document.getElementById('app'));	
},10000);