var ViewThermostat = function (thermos, rootElement) {
      this._thermos = thermos;
      this._rootElement = rootElement;
      this._state = document.createElement("div");

  ViewThermostat.prototype.stateChange = function () {
         this._state.innerText = "Состояние: " + (this._thermos._state ? "вкл." : "выкл.");
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

         this._onBtn = document.createElement("button");
         this._onBtn.type = "button";
         this._onBtn.innerHTML = "Вкл.";
         this._onBtn.className = "on";
         this._onBtn.addEventListener("click", function () {
            this._thermos.on();
            this.stateChange();
            this.showTemp();
         });

         this._offBtn = document.createElement("button");
         this._offBtn.type = "button";
         this._offBtn.innerHTML = "Выкл.";
         this._offBtn.className = "off";
         this._offBtn.addEventListener("click", function () {
            this._thermos.off();
            this.stateChange();
         });

         this.stateChange();
         thermos.appendChild(name);
         thermos.appendChild(this._state);
         thermos.appendChild(temp);
         thermos.appendChild(model);
         thermos.appendChild(this._onBtn);
         thermos.appendChild(this._offBtn);
         //this._rootElement.innerHTML = "";
         this._rootElement.appendChild(thermos);
      };
}