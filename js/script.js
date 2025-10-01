// RACCOLTA DATI

//Form
const formElem = document.getElementById("ticket-form");

//Input
const destinationInput = document.getElementById("destination");
const selectAgeInput = document.getElementById("age");

// Variabili globali
const priceKm = 0.21;
const discountUnderage = 0.2;
const discountOver65 = 0.4;
let ticketPrice = 0;
let message = "";

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const destinationElem = parseInt(destinationInput.value);
  const ageElem = selectAgeInput.value;
  
  if (ageElem === "over-65") {
    ticketPrice = (destinationElem * priceKm) * (1 - discountOver65);
    message = `Il costo finale del biglietto sarà € ${ticketPrice.toFixed(2)}`;
    } else if (ageElem === "adult") {
    ticketPrice = destinationElem * priceKm;
    message = `Il costo finale del biglietto sarà € ${ticketPrice.toFixed(2)}`;
    } else {
    ticketPrice = (destinationElem * priceKm) * (1 - discountUnderage);
    message = `Il costo finale del biglietto sarà € ${ticketPrice.toFixed(2)}`;
}
    console.log(message);
    
});
