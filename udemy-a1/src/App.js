import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{
	state = {
		charArray : [],
	};
	userChangeHandler = (event) => {
		this.setState({ charArray: event.target.value.split('')});
	};
	deleteCharHandler = (index) => {

	}
	render(){
		return (
			<div className="App">
				<UserInput userChangeHandler={this.userChangeHandler} />
				<ValidationComponent charArray={this.state.charArray}/>
				{this.state.charArray.map((char, index) => {
					return <CharComponent
						key={index}
						char={char} 
						clickHandler={() => { this.changeHandler(index)}}/>
				})}
				
			</div>
		);
	}

}

export default App;
