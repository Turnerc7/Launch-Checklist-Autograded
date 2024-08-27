// Write your JavaScript code here!


window.addEventListener("load", function() {
    const form = document.getElementById("launchForm");
    const list = document.getElementById("faultyItems");

    form.addEventListener("submit", async function(event) {     
        

        const pilot = document.querySelector("[name=pilotName]").value;
        const copilot = document.querySelector("[name=copilotName]").value;
        const fuelLevel = document.querySelector("[name=fuelLevel]").value;
        const cargoLevel = document.querySelector("[name=cargoMass]").value;
       
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
});

    
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
    (async function() {
        let listedPlanets = await myFetch();
        let planet = pickPlanet(listedPlanets);

        console.log(listedPlanets);
        console.log(planet);

        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });

});

