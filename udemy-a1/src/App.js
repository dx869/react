import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{
	state = {
		input : '',
		charArray : [],
	};
	userChangeHandler = (event) => {
		this.setState({ 
			charArray: event.target.value.split(''),
			input: event.target.value,
		});
	};
	deleteCharHandler = (index) => {
		const charArrayCopy = [...this.state.charArray];
		charArrayCopy.splice(index, 1);
		this.setState({
			charArray : charArrayCopy,
			input: charArrayCopy.join(''),
		});
	}
	render(){
		return (
			<div className="App">
				<UserInput userChangeHandler={this.userChangeHandler} input={this.state.input}/>
				<ValidationComponent charArray={this.state.charArray}/>
				{this.state.charArray.map((char, index) => {
					return <CharComponent
						key={index}
						char={char} 
						click={() => {this.deleteCharHandler(index)}}/>
				})}
				
			</div>
		);
	}

}

export default App;
