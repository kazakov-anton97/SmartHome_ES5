var BaseDevice = function BaseDevice(model) {
	this._state = false;
	this._model = model;

	BaseDevice.prototype.on = function () {
		this._state = true;
	};

	BaseDevice.prototype.off = function () {
		this._state = false;
	};

	BaseDevice.prototype.getState = function () {
		return this._state;
	};

	BaseDevice.prototype.getModel = function () {
		return this._model;
	};
}