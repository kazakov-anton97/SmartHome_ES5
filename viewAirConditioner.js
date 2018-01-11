var ViewAirConditioner = function (aircond, rootElement) {
      this._aircond = aircond;
      this._rootElement = rootElement;
      this._state = document.createElement("div");
   
   ViewAirConditioner.prototype.stateChange = function () {
      this._state.innerText = "Состояние: " + this._aircond._state ? "вкл." : "выкл.";
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
      
      this._onBtn = document.createElement("button");
      this._onBtn.type = "button";
      this._onBtn.innerHTML = "Вкл.";
      this._onBtn.className = "on";
      this._onBtn.addEventListener("click", function () {
         this._aircond.on();
         this.stateChange();
      });
      
      this._offBtn = document.createElement("button");
      this._offBtn.type = "button";
      this._offBtn.innerHTML = "Выкл.";
      this._offBtn.className = "off";
      this._offBtn.addEventListener("click", function () {
         this._aircond.off();
         this.stateChange();
      });

      this._incTemp = document.createElement("button");
      this._incTemp.type = "button";
      this._incTemp.innerHTML = "Теплее";
      this._incTemp.className = "on";
      this._incTemp.addEventListener("click", function () {
         this._aircond.increaseTemp();
         this._temp.innerText = "Темп.: " + this._aircond.currentTemp;
      });

      this._decTemp = document.createElement("button");
      this._decTemp.type = "button";
      this._decTemp.innerHTML = "Холоднее";
      this._decTemp.className = "off";
      this._decTemp.addEventListener("click", function () {
         this._aircond.decreaseTemp();
         this._temp.innerText = "Темп.: " + this._aircond.currentTemp;
      });
      
      this.stateChange();
      aircond.appendChild(name);
      aircond.appendChild(this._state);
      aircond.appendChild(temp);
      aircond.appendChild(model);
      aircond.appendChild(this._onBtn);
      aircond.appendChild(this._offBtn);
      aircond.appendChild(this._incTemp);
      aircond.appendChild(this._decTemp);
      //this._rootElement.innerHTML = "";
      this._rootElement.appendChild(aircond);
   };
}