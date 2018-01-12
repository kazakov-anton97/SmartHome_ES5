var ViewThermostat = function (thermos, rootElement) {
      this._thermos = thermos;
      this._rootElement = rootElement;
      this._state = document.createElement("div");
}

   ViewThermostat.prototype = Object.create(BaseDevice.prototype);
   ViewThermostat.prototype.constructor = ViewThermostat;

  ViewThermostat.prototype.stateChange = function () {
         this._state.innerText = `Состояние: ${this._thermos._state ? "вкл." : "выкл."}`;
      };

   ViewThermostat.prototype.render = function () {

         var name = document.createElement("div");
         name.innerText = "Thermostat";

         var thermos = document.createElement("div");
         thermos.className = "thermostat";

         var temp = document.createElement("div");
         temp.innerText = "Темп.: " + this._thermos._currentTemp;

         var model = document.createElement("div");
         model.innerText = "Модель: " + this._thermos._model;

         var onBtn = document.createElement("button");
         onBtn.type = "button";
         onBtn.innerHTML = "Вкл.";
         onBtn.className = "on";
         onBtn.addEventListener("click", () => {
            this._thermos.on();
            this.stateChange();
         });

         var offBtn = document.createElement("button");
         offBtn.type = "button";
         offBtn.innerHTML = "Выкл.";
         offBtn.className = "off";
         offBtn.addEventListener("click", () => {
            this._thermos.off();
            this.stateChange();
         });

         this.stateChange();
         thermos.appendChild(name);
         thermos.appendChild(this._state);
         thermos.appendChild(temp);
         thermos.appendChild(model);
         thermos.appendChild(onBtn);
         thermos.appendChild(offBtn);
         this._rootElement.appendChild(thermos);
}