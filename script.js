const nyt = new Date();
const text = "Tänään on päivä " + nyt.toLocaleDateString();

document.getElementById("paivays").innerHTML = text;
