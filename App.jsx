import React from 'react';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data: 0
		}

		this.setNewNumber = this.setNewNumber.bind(this);
	};

	setNewNumber(){
		this.setState({data: this.state.data + 1})
	}

	render() {
		return (
			<div>
				<button onClick={this.setNewNumber}>Increment</button>
				<Content myNumber={this.state.data}></Content>
			</div>
		);
	}
}

class Content extends React.Component{
	componentWillMount(){
		console.log('Component will Mount');
	}

	componentDidMount(){
		console.log('Component did Mount');
	}

	componentWillReceiveProps(newProps){
		console.log('Component will receive Props');
	}

	shouldComponentUpdate(newProps, newState){
		return true;
	}

	componentWillUpdate(nextProps, nextState){
		console.log('Component will update');
	}

	componentDidUpdate(prevProps, prevState){
		console.log('Component did update');
	}

	componentWillUnmount(){
		console.log('Component will unmount');
	}

	render() {
		return (
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		);
	}
}

export default App;