"use strict";

class Camera extends baseDevice {
	constructor(model, status, mode) {
		super(model);
		this._status = live;
		this._mode = day;
	}

	changeStatus() {
		this._status = record;
	}

	changeMode() {
		this._mode = night;
	}
}