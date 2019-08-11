import React, { Component } from 'react';
import './CharComponent.css';

class CharComponent extends Component {
	render(){
		return (
			<div className='Char' onClick={this.props.click}>{this.props.char}</div>
		);
	}
}
export default CharComponent;