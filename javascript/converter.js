/////////////////////////// converter //////////////////////////////
//this code provides the functionality to select currencies, view their flags, 
//swap currencies, and fetch and display exchange rates between them.

//the code selects various elements from the DOM
const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

//the nested loop iterates over each dropdown list and populates them with options representing currency codes.
for (let i = 0; i < dropList.length; i++) {
  for(currency_code in country_code){
    let selected;
    if(i == 0){
      selected = currency_code == "SGD" ? "selected" : "";
    }else if(i == 1){
      selected = currency_code == "USD" ? "selected" : "";
    }
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", e =>{
    loadFlag(e.target);
  });
}

//this function loads the flag image associated with the selected currency
function loadFlag(element){
  for(code in country_code){
    if(code == element.value){
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`;
    }
  }
}

window.addEventListener("load", () =>{
  getExchangeRate();
});

getButton.addEventListener("click", e =>{
  e.preventDefault();
  getExchangeRate();
});

//swaps the selected currencies when clicked.
//updates the flag images and fetches the exchange rate.
const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", ()=>{
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});

//this function retrieves the exchange rate between 2 currencies using an API.
//it fetches the exchange rate based on selected currencies, calculates the total exchange amount and updates the text displaying the exchange rate.
function getExchangeRate(){
  const amount = document.querySelector(".amount input"),
  exchangeRateTxt = document.querySelector(".exchange-rate");
  let amountVal = amount.value;
  if(amountVal == "" || amountVal == "0"){
    amount.value = "1";
    amountVal = 1;
  }
  exchangeRateTxt.innerText = "Getting exchange rate...";
  let url = `https://v6.exchangerate-api.com/v6/3fa0ae870f7763bd6b6afd03/latest/${fromCurrency.value}`;
  fetch(url).then(response => response.json()).then(result => {
    let exchangeRate = result.conversion_rates[toCurrency.value];
    let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
    exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
  }).catch(() =>{
    exchangeRateTxt.innerText = "Something went wrong";
  });
}