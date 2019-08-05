import React, { Component } from 'react';
import './ValidationComponent.css';

class ValidationComponent extends Component {
	render(){
		return (<div>
			{this.props.charArray.length > 5 ? 'Text long enough' : 'Text too short'}
		</div>);
	}
};
export default ValidationComponent;