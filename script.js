// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       response.json().then(function(json) {
           //console.log(JSON.stringify(json))
           let missionTarget = document.getElementById("missionTarget");
           let data = json[Math.floor(json.length * Math.random())];
           console.log("Random Data :- " + data);
           missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${data.name}</li>
                   <li>Diameter: ${data.diameter}</li>
                   <li>Star: ${data.star}</li>
                   <li>Distance from Earth: ${data.distance}</li>
                   <li>Number of Moons: ${data.moons}</li>
               </ol>
               <img src="${data.image}">
           `;
       });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      }
      //console.log("PilotName :- " + isNaN(parseFloat(pilotName.value)))
      else if (!isNaN(parseFloat(pilotName.value))) {
          alert("Pilot Name should be Text");
          event.preventDefault();
      }
      else if (!isNaN(parseFloat(copilotName.value))) {
          alert("Co Pilot Name should be Text");
          event.preventDefault();

      }
       //console.log("fuelLevel :- " + isNaN(parseFloat(pilotName.value)))

      else if (isNaN(parseFloat(fuelLevel.value))) {
          alert("Fuel Level is Not a Number");
          event.preventDefault();

      }
      else if (isNaN(parseFloat(cargoMass.value))) {
       alert("Cargo Mass is Not a Number");
       event.preventDefault();
       }

       let faultyItems = document.getElementById("faultyItems");
       let launchStatus = document.getElementById("launchStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let cargoStatus = document.getElementById("cargoStatus");
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");

       pilotStatus.innerHTML = "Pilot " + pilotName.value + " is ready for Launch";
       copilotStatus.innerHTML = "Co-pilot " + copilotName.value + " is ready for Launch";
       console.log("fuelLevel :- " + fuelLevel.value);
       if (fuelLevel.value < 10000) {
           console.log("Fuel level is less");
           faultyItems.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "red";
           fuelStatus.innerHTML = "Fuel Level Too Low for Launch";
           cargoStatus.innerHTML = "Cargo mass low enough for launch";
           event.preventDefault();
       } 
       if (cargoMass.value > 10000) {
           console.log("Cargo Mass is More")
           faultyItems.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           fuelStatus.innerHTML = "Fuel level high enough for launch";
           launchStatus.style.color = "red";
           cargoStatus.innerHTML = "Cargo Mass Too Much for Shuttle to Take off";
           event.preventDefault();
       }
       if (fuelLevel.value > 10000 && cargoMass.value < 10000){
           faultyItems.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle is Ready for Launch";
           fuelStatus.innerHTML = "Fuel level high enough for launch";
           cargoStatus.innerHTML = "Cargo mass low enough for launch";
           launchStatus.style.color = "green";
           event.preventDefault();
       }


   });
});
