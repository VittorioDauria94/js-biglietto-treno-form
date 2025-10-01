function getHouseImage(house) {
  const name = house.toLowerCase();

  if (name === "algorindoro") {
    return "./img/algorindoro.webp";
  } else if (name === "debugclaw") {
    return "./img/debugclaw.webp";
  } else if (name === "bitflepuff") {
    return "./img/bitflepuff.webp";
  } else if (name === "serpicode") {
    return "./img/serpicode.webp";
  } else {
    return "";
  }
}

function calculateTicketPrice(distance, age) {
  let price = distance * price;

  if (age === "minor") {
    price *= 1 - discountUnderage;
  } else if (age === "over-65") {
    price *= 1 - discountOver65;
  }

  return price;
}
