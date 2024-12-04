const cookie = document.getElementById("cookie");
const currencyCount = document.getElementById("currencyCount");
const upgradeButton1 = document.getElementById("upgradeButton1");
const slavC = document.getElementById("slavC");
const slavCount = document.getElementById("slavCount");
const upgradeButton2 = document.getElementById("upgradeButton2");
const pointerC = document.getElementById("pointer");
const pointerLvl = document.getElementById("pointerLvl");
const upgradeButton3 = document.getElementById("upgradeButton3");
const factoryC = document.getElementById("factoryC"); 
const factoryCount = document.getElementById("factoryCount");
const upgradeButton4 = document.getElementById("upgradeButton4");
const timeC = document.getElementById("timeC"); 
const timeCount = document.getElementById("timeCount");

cookie.addEventListener("click", onClick);
var currency = 0;
var moneyPerClick = 1;

function onClick(){
    currency += moneyPerClick;
    currencyCount.innerHTML = `Currency: ${currency}`;
}

var idle = 0;
function idling(){
    currency += idle;
    currency = Math.round(currency * 10) / 10;
    currencyCount.innerHTML = `Currency: ${currency}`;
}
let idling1 = setInterval(idling, 1000);

upgradeButton1.addEventListener("click", upgrade1);
var slavCost = 10;
var slavNum = 0;

function upgrade1(){
    if (currency >= slavCost){
        currency -= slavCost;
        slavCost *= 1.3;
        slavCost = Math.floor(slavCost);
        slavNum += 1;
        idle += 1;
    }
    else {
        alert("ur too poor");
    }
    currencyCount.innerHTML = `Currency: ${currency}`;
    slavC.innerHTML = `Upgrade: Worker (Cost: ${slavCost})`;
    slavCount.innerHTML = `Amount of workers: ${slavNum}`;
}

upgradeButton2.addEventListener("click", upgrade2);
var pointerCost = 50;
var pointerNum = 0;

function upgrade2(){
    if (currency >= pointerCost){
        currency -= pointerCost;
        pointerCost *= 3;
        pointerNum++;
        moneyPerClick *= 2;
    }
    else {
        alert("click better");
    }
    currencyCount.innerHTML = `Currency: ${currency}`;
    pointerC.innerHTML = `Upgrade: Click 2x (Cost: ${pointerCost})`;
    pointerLvl.innerHTML = `Click level: ${pointerNum}`;
}

upgradeButton3.addEventListener("click", upgrade3);
var factoryCost = 100;
var factoryNum = 0;

function upgrade3(){
    if (currency >= factoryCost){
        currency -= factoryCost;
        factoryCost *= 1.25;
        factoryCost = Math.floor(factoryCost);
        factoryNum++;
        idle += 10;
    }
    else {
        alert("Need more money for FACTORIES");
    }
    currencyCount.innerHTML = `Currency: ${currency}`;
    factoryC.innerHTML = `Upgrade: Click 2x (Cost: ${factoryCost})`;
    factoryCount.innerHTML = `Click level: ${factoryNum}`;
}

upgradeButton4.addEventListener("click", upgrade4);
var timeCost = 10000
var timePurchased = false;
var timePurchasedCost = "NA";

function upgrade4(){
    if (timePurchased == true){
        alert("Can't change time more than once")
        return;
    }
    else if (currency >= timeCost){
        currency -= timeCost;
        clearInterval(idling1);
        idling1 = setInterval(idling, 500);
        timeC.innerHTML = `Upgrade: Income/Time 2x (Cost: NA)`;
        timePurchased = true;
    }
    else {
        alert("Cannot even increase time");
    }
    currencyCount.innerHTML = `Currency: ${currency}`;
    timeC.innerHTML = `Upgrade: Income/Time 2x (Cost: ${timeCost})`;
    timeCount.innerHTML = `Purchased: ${timePurchased}`;
}
