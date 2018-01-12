function Camera(model, status, mode) {
	BaseDevice.call(this, model);
	this._status = status;
	this._mode = mode;
}

	Camera.prototype = Object.create(BaseDevice.prototype);
	Camera.prototype.constructor = Camera;

	Camera.prototype.liveStatus = function () {
		this._status = "live";
	};

	Camera.prototype.recordStatus = function () {
		this._status = "record";
	};

	Camera.prototype.dayMode = function () {
		this._mode = "day";
	};

	Camera.prototype.nightMode = function () {
		this._mode = "night";
	};

	Camera.prototype.getStatus = function () {
		return this._status;
	};

	Camera.prototype.getMode = function () {
		return this._mode;
	}