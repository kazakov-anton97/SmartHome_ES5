var Thermostat = function Thermostat(model, currentTemp) {
	BaseDevice.call(this, model);
	this._currentTemp = 12;

	Thermostat.prototype = Object.create(BaseDevice.prototype);
	Thermostat.prototype.constructor = Thermostat;

	Thermostat.prototype.showTemp = function () {
		if (this._state == true) {
			this._currentTemp = 22;
		}
	};

	Thermostat.prototype.getCurrentTemp = function () {
		return this._currentTemp;
	};
}