// Function getHouseImage
function getHouseImage(house) {
  const name = house.toLowerCase();

  const imgHouse = ["algorindoro", "debugclaw", "bitflepuff", "serpicode"];

  if (imgHouse.includes(name)) {
    return `./img/${name}.webp`;
  }

  return "./img/no-image.webp";
}

//Function calculateTicketPrice
function calculateTicketPrice(distance, age) {
  let price = distance * priceKm;

  if (age === "minor") {
    price *= 1 - discountUnderage;
  } else if (age === "over-65") {
    price *= 1 - discountOver65;
  }

  return price;
}

// Function showTicketAnimation
function showTicketAnimation() {
  if (clickCount === 1) {
  ticketResult.classList.remove("d-none");
  ticketResult.classList.add("show-ticket");
  } else if (clickCount === 2) {
    ticketResult.classList.remove("show-ticket");
    setTimeout(() => {
      ticketResult.classList.add("show-ticket");
    }, 50);
    clickCount = 1;
  }
}