const cookie = document.getElementById("cookie");
const currencyCount = document.getElementById("currencyCount");
const upgradeButton = document.getElementById("upgradeButton");
const counter = document.getElementById("counter");
const slavCount = document.getElementById("slavCount");


cookie.addEventListener("click", onClick);
var currency = 0;

function onClick(){
    currency++;
    currencyCount.textContent = `Currency: ${currency}`;
}

upgradeButton.addEventListener("click", upgrade1);
var slavCost = 10;
var slavNum = 0;

function upgrade1(){

    if (currency >= slavCost){
        currency -= slavCost;
        slavCost *= 1.5;
        slavCost = Math.floor(slavCost);
        slavNum += 1
    }
    else {
        alert("ur too poor");
    }
    currencyCount.innerHTML = `Currency: ${currency}`;
    counter.innerHTML = `Upgrade: Slav (Cost: ${slavCost})`;
    slavCount.innerHTML = `Amount of workers: ${slavNum}`;
}

var idle = 0;
function slavWork(){
    idle = slavNum * 0.1;
    currency += idle;
    currency = Math.round(currency * 10) / 10;
    currencyCount.innerHTML = `Currency: ${currency}`;
}

setInterval(slavWork, 1000);