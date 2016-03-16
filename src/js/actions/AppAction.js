'use strict';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';

class AppAction {
	parse(url) {
		AppDispatcher.dispatch({
			actionType: Constants.PARSE_URL,
			url: url
		});
	}
}

module.exports = new AppAction();