"use strict";

class Thermostat extends BaseDevice {
	constructor(model, currentTemp) {
		super(model);
		this._currentTemp = 12;
	}

	showTemp() {
		if (this._state == true) {
			this._currentTemp = 22;
		}
	}

	get currentTemp() {
		return this._currentTemp;
	}
}