// RACCOLTA DATI

//Form
const formElem = document.getElementById("ticket-form");

//Input
const distanceInput = document.getElementById("distance");
const selectAgeInput = document.getElementById("age");
const destinationInput = document.getElementById("destination");

//Elementi della card

// Variabili globali
const priceKm = 0.21;
const discountUnderage = 0.2;
const discountOver65 = 0.4;
let ticketPrice = 0;
let message = "";

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const distanceElem = parseInt(distanceInput.value);
  const ageElem = selectAgeInput.value;
  
  if (ageElem === "over-65") {
    ticketPrice = (distanceElem * priceKm) * (1 - discountOver65);
    message = `Il costo finale del biglietto sarà € ${ticketPrice.toFixed(2)}`;
    } else if (ageElem === "adult") {
    ticketPrice = distanceElem * priceKm;
    message = `Il costo finale del biglietto sarà € ${ticketPrice.toFixed(2)}`;
    } else {
    ticketPrice = (distanceElem * priceKm) * (1 - discountUnderage);
    message = `Il costo finale del biglietto sarà € ${ticketPrice.toFixed(2)}`;
}
    console.log(message);
    
});
