// List of stations along the Metro North Railroad
const listOfStops = [
  "Poughkeepsie",
  "Newburgh",
  "Peekskill",
  "Yonkers",
  "Bronx",
  "Grand Central",
];

// Generator function to yield the next station on the list each time it's called
function* iterateMetroNorthRailroad(station) {
  for (let countStation = 0; countStation < station.length; countStation++) {
    yield station[countStation]; // Yielding each station in the list
  }
}

// Initialize the generator function
const generator = iterateMetroNorthRailroad(listOfStops);

// Accessing the button and result elements in the HTML
const button = document.getElementById("nextStationBtn");
const result = document.getElementById("stationResult");

// Adding event listener to the button to show the next station when clicked
button.addEventListener("click", () => {
  const nextStop = generator.next().value; // Get the next station from the generator
  // Check if there are no more stations (when we reach "Grand Central")
  if (nextStop === undefined) {
    result.textContent = "We made it!"; // Display when we reach the last stop
    button.disabled = true;
  } else {
    result.textContent = `Next Stop: ${nextStop}`; // Display the next station
  }
});
