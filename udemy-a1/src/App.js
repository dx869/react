import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
	state = {
		input : '',
	};
	userChangeHandler = (event) => {
		this.setState({ input: event.target.value});
	};
	render(){
		return (
			<div className="App">
				<UserInput userChangeHandler={this.userChangeHandler} />
				<UserOutput input={this.state.input} />
			</div>
		);
	}

}

export default App;
