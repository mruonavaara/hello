const nyt = new Date();
const text = "Tänään on " + nyt.toLocaleDateString();

document.getElementById("paivays").innerHTML = text;