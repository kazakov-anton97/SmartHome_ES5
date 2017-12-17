"use strict";

class baseDevice {
	constructor(model) {
		this._state = false;
		this._model = model;
	}

	on() {
		this._state = true;
	}
	off() {
		this._state = false;
	}
	get state() {
		return this._state;
	}

	get model() {
		return this._model;
	}
}