"use strict";

class Thermostat extends baseDevice {
	constructor(model, currentTemp) {
		super(model);
		this._currentTemp = 0;
	}
	
	get currentTemp() {
		return this._currentTemp;
	}
}