'use strict';

import EventEmitter from 'events';
import Constants from '../constants/Constants'
import appDispatcher from '../dispatcher/AppDispatcher';

let _isParsing = false;

class AppStore extends EventEmitter {

	constructor() {
		super();
	}

	get isParsing() {
		return _isParsing;
	}

	emitChange() {
		this.emit(Constants.CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on(Constants.CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(Constants.CHANGE_EVENT, callback);
	}

	actionHandler(action) {
		switch(action.actionType) {
			case Constants.PARSE_URL:
				_isParsing = true;
				this.emitChange();
				break;
			default:
		}
	}
}

AppStore.dispatchToken = null;

let appStore = new AppStore();

appDispatcher.register(
	action => appStore.actionHandler(action)
);

export default appStore;