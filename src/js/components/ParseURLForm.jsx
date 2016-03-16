'use strict';

import React from 'react';
import ReactCSS from 'reactcss';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import AppAction from '../actions/AppAction';

class ParseURLForm extends ReactCSS.Component {

	buttonClickHandler() {
		AppAction.parse(this.refs.value);
	}

	classes() {
		return {
			'default': {
				container: {
					textAlign: 'center',
					position: 'relative',
				},
				TextField: {
					width: '60%',
					margin: '0 10px',
				},
				RefreshIndicator: {
					display: 'inline-block',
					position: 'relative',
				}
			}
		}
	}

	render() {
		return (
			<div is="container">
				{this.props.disabled ? <RefreshIndicator size={20} left={0} top={2} status="loading" style={this.styles().RefreshIndicator} /> : null}
				<TextField ref="input" disabled={this.props.disabled} style={this.styles().TextField} floatingLabelText="Insert URL"/>
				<RaisedButton disabled={this.props.disabled} onClick={() => this.buttonClickHandler()} label="Add" primary={true} />
			</div>
		)
	}
}

module.exports = ParseURLForm;