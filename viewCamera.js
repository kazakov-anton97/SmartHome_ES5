function ViewCamera(camera, rootElement) {
   this._camera = camera;
   this._rootElement = rootElement;
   this._state = document.createElement("div");
   this._status = document.createElement("div");
   this._mode = document.createElement("div");
}

   ViewCamera.prototype = Object.create(BaseDevice.prototype);
   ViewCamera.prototype.constructor = ViewCamera;

   ViewCamera.prototype.stateChange = function () { 
         this._state.innerText = `Состояние: ${this._camera._state ? "вкл." : "выкл."}`;
      };

   ViewCamera.prototype.statusChange = function () {
         this._status.innerText = `Статус: ${this._camera._status ? "record" : "live"}`;
      };
   ViewCamera.prototype.modeChange = function () {
         this._mode.innerText = `Режим: ${this._camera._mode ? "day" : "night"}`;
      }
   ViewCamera.prototype.render = function () {

         var name = document.createElement("div");
         name.innerText = "Camera";

         var camera = document.createElement("div");
         camera.className = "camera";

         var status = document.createElement("div");
         status.innerText = "Статус: " + this._camera._status;

         var mode = document.createElement("div");
         mode.innerText = "Режим: " + this._camera._mode;

         var model = document.createElement("div");
         model.innerText = "Модель: " + this._camera._model;

         var onBtn = document.createElement("button");
         onBtn.type = "button";
         onBtn.innerHTML = "Вкл.";
         onBtn.className = "on";
         onBtn.addEventListener("click", () => {
            this._camera.on();
            this.stateChange();
         });
      
         var offBtn = document.createElement("button");
         offBtn.type = "button";
         offBtn.innerHTML = "Выкл.";
         offBtn.className = "off";
         offBtn.addEventListener("click", () => {
            this._camera.off();
            this.stateChange();
         });

         var record = document.createElement("button");
         record.type = "button";
         record.innerHTML = "record";
         record.className = "on";
         record.addEventListener("click", () => {
           this.statusChange();
           this._camera.recordStatus();
           status.innerText = `Статус: ${this._camera._status}`;
         });

         var live = document.createElement("button");
         live.type = "button";
         live.innerHTML = "live";
         live.className = "off";
         live.addEventListener("click", () => {
            this.statusChange();
            this._camera.liveStatus();
            status.innerText = `Статус: ${this._camera._status}`;
         });

         var night = document.createElement("button");
         night.type = "button";
         night.innerHTML = "night";
         night.className = "on";
         night.addEventListener("click", () => {
             this._camera.nightMode();
             this.modeChange();
         });

         var day = document.createElement("button");
         day.type = "button";
         day.innerHTML = "day";
         day.className = "off";
         day.addEventListener("click", () => {
            this._camera.dayMode();
            this.modeChange();
         });

         this.stateChange();
         this.statusChange();
         this.modeChange();
         camera.appendChild(name);
         camera.appendChild(this._state);
         camera.appendChild(this._status);
         camera.appendChild(this._mode);
         camera.appendChild(model);
         camera.appendChild(onBtn);
         camera.appendChild(offBtn);
         camera.appendChild(record);
         camera.appendChild(live);
         camera.appendChild(night);
         camera.appendChild(day);
         this._rootElement.appendChild(camera);
}