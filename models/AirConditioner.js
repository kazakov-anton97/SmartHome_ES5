var AirConditioner = function AirConditioner(model, currentTemp) {
	BaseDevice.call(this, model);
	this._currentTemp = 0;

	AirConditioner.prototype = Object.create(BaseDevice.prototype);
	AirConditioner.prototype.constructor = AirConditioner;

	AirConditioner.prototype.increaseTemp = function () {
		if ((this._currentTemp < 20) && (this._state == true)) {
			this._currentTemp += 2;
		}
	};

	AirConditioner.prototype.decreaseTemp = function () {
		if ((this._currentTemp > -15) && (this._state == true)){
			this._currentTemp -= 2;
		}
	};

	AirConditioner.prototype.getCurrentTemp = function () {
		return this._currentTemp;
	};
}