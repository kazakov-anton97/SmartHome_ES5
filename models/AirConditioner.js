"use strict";

class AirConditioner extends BaseDevice {
	constructor(model, currentTemp) {
		super(model);
		this._currentTemp = 0;
	}

	increaseTemp() {
		if ((this._currentTemp < 20) && (this._state == true)) {
			this._currentTemp += 2;
		}
	}
	decreaseTemp() {
		if ((this._currentTemp > -15) && (this._state == true)){
			this._currentTemp -= 2;
		}
	}
	get currentTemp() {
		return this._currentTemp;
	}
}