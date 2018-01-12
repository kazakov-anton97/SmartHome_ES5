function ViewAirConditioner(aircond, rootElement) {
      this._aircond = aircond;
      this._rootElement = rootElement;
      this._state = document.createElement("div");
   }
   
   ViewAirConditioner.prototype = Object.create(BaseDevice.prototype);
   ViewAirConditioner.prototype.constructor = ViewAirConditioner;

   ViewAirConditioner.prototype.stateChange = function () {
      this._state.innerText = `Состояние: ${this._aircond._state ? "вкл." : "выкл."}`;
   };
   
   ViewAirConditioner.prototype.render = function () {

      var name = document.createElement("div");
      name.innerText = "AirConditioner";

      var aircond = document.createElement("div");
      aircond.className = "aircond";
      
      var temp = document.createElement("div");
      temp.innerText = "Темп.: " + this._aircond._currentTemp;
      
      var model = document.createElement("div");
      model.innerText = "Модель: " + this._aircond._model;
      
      var onBtn = document.createElement("button");
      onBtn.type = "button";
      onBtn.innerHTML = "Вкл.";
      onBtn.className = "on";
      onBtn.addEventListener("click", () => {
         this._aircond.on();
         this.stateChange();
      });
      
      var offBtn = document.createElement("button");
      offBtn.type = "button";
      offBtn.innerHTML = "Выкл.";
      offBtn.className = "off";
      offBtn.addEventListener("click", () => {
         this._aircond.off();
         this.stateChange();
      });

      var incTemp = document.createElement("button");
      incTemp.type = "button";
      incTemp.innerHTML = "Теплее";
      incTemp.className = "on";
      incTemp.addEventListener("click", () => {
         this._aircond.increaseTemp();
         temp.innerText = `Темп.: ${this._aircond._currentTemp}`;
      });

      var decTemp = document.createElement("button");
      decTemp.type = "button";
      decTemp.innerHTML = "Холоднее";
      decTemp.className = "off";
      decTemp.addEventListener("click", () => {
         this._aircond.decreaseTemp();
         temp.innerText = `Темп.: ${this._aircond._currentTemp}`;
      });
      
      this.stateChange();
      aircond.appendChild(name);
      aircond.appendChild(this._state);
      aircond.appendChild(temp);
      aircond.appendChild(model);
      aircond.appendChild(onBtn);
      aircond.appendChild(offBtn);
      aircond.appendChild(incTemp);
      aircond.appendChild(decTemp);
      this._rootElement.appendChild(aircond);
}