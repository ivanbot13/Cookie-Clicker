var num = 0;
var slavs = 0;
var slavCost = 20;
var slavCount = 0;
var currency = document.getElementById("currency");
const cookie = document.getElementById("cookie").addEventListener("click", clicker);
const slavCountScreen = document.getElementById("slavCount");
const slavCostScreen = document.getElementById("slavCost");

function clicker(){ 
    num ++;
    currency.textContent = `cookiees: ${num}`;
    currency.innerHTML = num;
}

function buySlav(){
    if (num >= slavCost){
        slavCount += 1;
    }
}

function autoUpgraders(){
    num += slavCount;
    slavCountScreen.innerHTML = num;
    setTimeout(autoUpgraders, 1000);
}
autoUpgraders