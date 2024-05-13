// Functionize Minecraft Fishing Start Code

// Fish Count Variable
var numCod = 0;
var numSalmon = 0;
var numTropical = 0;
var numPuff = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  var char = document.getElementById("character-select").value;
  var rand = Math.random();
  console.log(rand);
  if (char === "steve") {
    // Steve Fishing Simulator
    if (rand < 0.7) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (rand < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (rand < 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuff++;
      document.getElementById("num-puffer").innerHTML = numPuff;
    }
  } else if (char === "alex") {
    // Alex Fishing Simulator
    if (rand < 0.1) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (rand < 0.2) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (rand < 0.5) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuff++;
      document.getElementById("num-puffer").innerHTML = numPuff;
    }
  } else {
    // Villager Fishing Simulator
    if (rand < 0.25) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (rand < 0.5) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (rand < 0.75) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuff++;
      document.getElementById("num-puffer").innerHTML = numPuff;
    }
  }
}
