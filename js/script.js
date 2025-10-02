// DATA COLLECTION

//Form
const formElem = document.getElementById("ticket-form");

//Input
const distanceInput = document.getElementById("distance");
const selectAgeInput = document.getElementById("age");
const destinationInput = document.getElementById("destination");

//Card element
const ticketResult = document.getElementById("ticket-result");
const houseImg = document.getElementById("house-img");
const houseName = document.getElementById("house-name");
const distancePrint = document.getElementById("distance-print");
const agePrint = document.getElementById("age-print");
const pricePrint = document.getElementById("price-print");

// Global variables
const priceKm = 0.21;
const discountUnderage = 0.2;
const discountOver65 = 0.4;
let clickCount = 0;

//FORM LISTENER
formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  // Form Value
  const distance = parseFloat(distanceInput.value);
  const house = destinationInput.value;
  const ageValue = selectAgeInput.value;
  const ageText = selectAgeInput.selectedOptions[0].label;

  const price = calculateTicketPrice(distance, ageValue);
  const imgSrc = getHouseImage(house);

  // Output
  houseImg.src = imgSrc;
  houseImg.alt = house;
  houseName.innerHTML = `<strong>Casata da raggiungere:</strong> ${house}`;
  distancePrint.innerHTML = `<strong>Distanza:</strong> ${distance} km`;
  agePrint.innerHTML = `<strong>Fascia d'età:</strong> ${ageText}`;
  pricePrint.innerHTML = `<strong>Prezzo:</strong> ${price.toFixed(
    2
  )} Galleoni`;

  clickCount++;
  formElem.reset();

  showTicketAnimation();
});
