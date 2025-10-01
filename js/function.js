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
