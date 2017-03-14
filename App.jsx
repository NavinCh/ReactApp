import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
	constructor(){
		super();

		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	};

	findDomNodeHandler(){
		var myDiv = document.getElementById('myDiv');
		ReactDom.findDOMNode(myDiv).style.color = 'green';
	};

	render() {
		return (
			<div>
				<button onClick={this.findDomNodeHandler}>find dom node</button>
				<div id="myDiv">This div turns green on clicking button</div>
			</div>
		);
	}
}

export default App;