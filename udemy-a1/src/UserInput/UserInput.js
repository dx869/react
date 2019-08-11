import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component{
	render(){
		return (
			<div className="UserInput">
				<input className="UserInputCharged" placeholder="Enter anything" onChange={this.props.userChangeHandler} value={this.props.input}/>
			</div>
		);
	}
}
export default UserInput;