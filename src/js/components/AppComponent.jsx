'use strict';

import React from 'react';
import ParseURLComponent from './ParseURLForm.jsx';
import AppStore from '../stores/AppStore';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getState();
		this.callback = this.changeHandler.bind(this);
	}

	getState() {
		return {
			isParsing: AppStore.isParsing
		};
	}

	componentDidMount() {
		AppStore.addChangeListener(this.callback);
	}

	componentWillUnmount() {
		AppStore.removeChangeListener(this.callback);
	}

	render() {
		return(
			<div>
				<ParseURLComponent disabled={this.state.isParsing} />
			</div>
		);
	}

	changeHandler() {
		this.setState(this.getState());
	}
}

module.exports = AppComponent;