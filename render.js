var addBtn = document.getElementById("add");
      addBtn.className = "add";
      addBtn.addEventListener("click", function () {
      var AC = new AirConditioner("Samsung");
      var VAC = new ViewAirConditioner(AC, document.getElementById("root"));
	VAC.render();
      });

var addBtn2 = document.getElementById("addCam");
      addBtn2.className = "addCam";
      addBtn2.addEventListener("click", function () {
      var C = new Camera("Canon");
      var VC = new ViewCamera(C, document.getElementById("root"));
      VC.render();
      });

var addBtn3 = document.getElementById("addTherm");
      addBtn3.className = "addTherm";
      addBtn3.addEventListener("click", function () {
      var T = new Thermostat("Philips");
      var VT = new ViewThermostat(T, document.getElementById("root"));
      VT.render();
      });

var delBtn = document.getElementById("delete");
      delBtn.className = "delete";
      delBtn.addEventListener("click", function () {
      root.innerHTML = "";
      });
