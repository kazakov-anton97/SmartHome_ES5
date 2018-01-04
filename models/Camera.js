"use strict";

class Camera extends BaseDevice {
	constructor(model, status, mode) {
		super(model);
		this._status = status;
		this._mode = mode;
	}

	liveStatus() {
		this._status = "live";
	}

	recordStatus() {
		this._status = "record";
	}

	dayMode() {
		this._mode = "day";
	}

	nightMode() {
		this._mode = "night";
	}

	get status() {
		return this._status;
	}

	get mode() {
		return this._mode;
	}
}