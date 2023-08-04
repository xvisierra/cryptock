function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('current-date-time').textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second

updateDateTime();
setInterval(updateDateTime, 1000);
var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var btcPrice = document.getElementById("bitcoin-price");
var ltcPrice = document.getElementById("litecoin-price");
var ethPrice = document.getElementById("ethereum-price");
var dogePrice = document.getElementById("dogecoin-price");

var btcTotal = document.getElementById("bitcoin-total");
var ltcTotal = document.getElementById("litecoin-total");
var ethTotal = document.getElementById("ethereum-total");
var dogeTotal = document.getElementById("dogecoin-total");


var btcinvestedValue = 496;
var ltcinvestedValue = 98;
var dogeinvestedValue = 232;
var ethinvestedValue = 100;

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd.toFixed(2);
    ltc.innerHTML = response.litecoin.usd.toFixed(2);
    eth.innerHTML = response.ethereum.usd.toFixed(2);
    doge.innerHTML = response.dogecoin.usd.toFixed(2);

    btcPrice.innerHTML = response.bitcoin.usd.toFixed(2);
    ltcPrice.innerHTML = response.litecoin.usd.toFixed(2);
    ethPrice.innerHTML = response.ethereum.usd.toFixed(2);
    dogePrice.innerHTML = response.dogecoin.usd.toFixed(2);


    var bitcoinUnits = 0.017;
    var bitcoinCurrentPrice = response.bitcoin.usd;
    var bitcoinTotalValue = bitcoinUnits * bitcoinCurrentPrice;
    var bitcoinProfitLoss = bitcoinTotalValue - btcinvestedValue;

    var litecoinUnits = 0.73;
    var litecoinCurrentPrice = response.litecoin.usd;
    var litecoinTotalValue = litecoinUnits * litecoinCurrentPrice;
    var litecoinProfitLoss = litecoinTotalValue - ltcinvestedValue;

    var ethereumUnits = 0.13;
    var ethereumCurrentPrice = response.ethereum.usd;
    var ethereumTotalValue = ethereumUnits * ethereumCurrentPrice;
    var ethereumProfitLoss = ethereumTotalValue - ethinvestedValue;

    var dogecoinUnits =1339;
    var dogecoinCurrentPrice = response.dogecoin.usd;
    var dogecoinTotalValue = dogecoinUnits * dogecoinCurrentPrice;
    var dogecoinProfitLoss = dogecoinTotalValue - dogeinvestedValue;

    document.getElementById("bitcoin-total").innerHTML = bitcoinTotalValue.toFixed(2);
    document.getElementById("bitcoin-profit").innerHTML = bitcoinProfitLoss.toFixed(2);

    document.getElementById("litecoin-total").innerHTML = litecoinTotalValue.toFixed(2);
    document.getElementById("litecoin-profit").innerHTML = litecoinProfitLoss.toFixed(2);

    document.getElementById("ethereum-total").innerHTML = ethereumTotalValue.toFixed(2);
    document.getElementById("ethereum-profit").innerHTML = ethereumProfitLoss.toFixed(2);

    document.getElementById("dogecoin-total").innerHTML = dogecoinTotalValue.toFixed(2);
    document.getElementById("dogecoin-profit").innerHTML = dogecoinProfitLoss.toFixed(2);

});
