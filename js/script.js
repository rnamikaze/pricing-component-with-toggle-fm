let toggleButton = document.getElementById("toggle");
let pricingText = document.getElementsByClassName("pricing-price");

// Anually Price
let basicPrice = 199;
let proPrice = 249;
let masterPrice = 399;

// Monthly Price
let basicPriceM = 19;
let proPriceM = 24;
let masterPriceM = 39;

let annually = false;

function updatePrice(isAnnually) {
  if (isAnnually) {
    let basicP = basicPriceM + 10;
    let proP = proPriceM + 10;
    let masterP = masterPriceM + 10;

    const basic = setInterval(function () {
      pricingText[0].innerHTML = "&dollar;" + --basicP + ".99";
      pricingText[1].innerHTML = "&dollar;" + --proP + ".99";
      pricingText[2].innerHTML = "&dollar;" + --masterP + ".99";
      if (basicP == basicPriceM) {
        clearInterval(basic);
      }
    }, 100);

    return false;
  } else {
    let basicP = basicPrice + 10;
    let proP = proPrice + 10;
    let masterP = masterPrice + 10;

    const basic = setInterval(function () {
      pricingText[0].innerHTML = "&dollar;" + --basicP + ".99";
      pricingText[1].innerHTML = "&dollar;" + --proP + ".99";
      pricingText[2].innerHTML = "&dollar;" + --masterP + ".99";
      if (basicP == basicPrice) {
        clearInterval(basic);
      }
    }, 100);

    return true;
  }
}

toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle("active");
  annually = updatePrice(annually);
});
