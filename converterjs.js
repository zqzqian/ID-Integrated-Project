///////////////////////////// country code list //////////////////////////////

let country_code = {
    "AED": "AE", // United Arab Emirates
    "AFN": "AF", // Afghanistan
    "ALL": "AL", // Albania
    "AMD": "AM", // Armenia
    "ANG": "AN", // Netherlands Antilles
    "AOA": "AO", // Angola
    "ARS": "AR", // Argentina
    "AUD": "AU", // Australia
    "AWG": "AW", // Aruba
    "AZN": "AZ", // Azerbaijan
    "BAM": "BA", // Bosnia and Herzegovina
    "BBD": "BB", // Barbados
    "BDT": "BD", // Bangladesh
    "BGN": "BG", // Bulgaria
    "BHD": "BH", // Bahrain
    "BIF": "BI", // Burundi
    "BMD": "BM", // Bermuda
    "BND": "BN", // Brunei
    "BOB": "BO", // Bolivia
    "BRL": "BR", // Brazil
    "BSD": "BS", // Bahamas
    "BTN": "BT", // Bhutan
    "BWP": "BW", // Botswana
    "BYN": "BY", // Belarus
    "BZD": "BZ", // Belize
    "CAD": "CA", // Canada
    "CDF": "CD", // Democratic Republic of the Congo
    "CHF": "CH", // Switzerland
    "CLP": "CL", // Chile
    "CNY": "CN", // China
    "COP": "CO", // Colombia
    "CRC": "CR", // Costa Rica
    "CUP": "CU", // Cuba
    "CVE": "CV", // Cape Verde
    "CZK": "CZ", // Czech Republic
    "DJF": "DJ", // Djibouti
    "DKK": "DK", // Denmark
    "DOP": "DO", // Dominican Republic
    "DZD": "DZ", // Algeria
    "EGP": "EG", // Egypt
    "ERN": "ER", // Eritrea
    "ETB": "ET", // Ethiopia
    "EUR": "EU", // European Union
    "FJD": "FJ", // Fiji
    "FKP": "FK", // Falkland Islands
    "GBP": "GB", // United Kingdom
    "GEL": "GE", // Georgia
    "GGP": "GG", // Guernsey
    "GHS": "GH", // Ghana
    "GIP": "GI", // Gibraltar
    "GMD": "GM", // Gambia
    "GNF": "GN", // Guinea
    "GTQ": "GT", // Guatemala
    "GYD": "GY", // Guyana
    "HKD": "HK", // Hong Kong
    "HNL": "HN", // Honduras
    "HRK": "HR", // Croatia
    "HTG": "HT", // Haiti
    "HUF": "HU", // Hungary
    "IDR": "ID", // Indonesia
    "ILS": "IL", // Israel
    "IMP": "IM", // Isle of Man
    "INR": "IN", // India
    "IQD": "IQ", // Iraq
    "IRR": "IR", // Iran
    "ISK": "IS", // Iceland
    "JEP": "JE", // Jersey
    "JMD": "JM", // Jamaica
    "JOD": "JO", // Jordan
    "JPY": "JP", // Japan
    "KES": "KE", // Kenya
    "KGS": "KG", // Kyrgyzstan
    "KHR": "KH", // Cambodia
    "KID": "KI", // Kiribati
    "KMF": "KM", // Comoros
    "KRW": "KR", // South Korea
    "KWD": "KW", // Kuwait
    "KYD": "KY", // Cayman Islands
    "KZT": "KZ", // Kazakhstan
    "LAK": "LA", // Laos
    "LBP": "LB", // Lebanon
    "LKR": "LK", // Sri Lanka
    "LRD": "LR", // Liberia
    "LSL": "LS", // Lesotho
    "LYD": "LY", // Libya
    "MAD": "MA", // Morocco
    "MDL": "MD", // Moldova
    "MGA": "MG", // Madagascar
    "MKD": "MK", // North Macedonia
    "MMK": "MM", // Myanmar
    "MNT": "MN", // Mongolia
    "MOP": "MO", // Macau
    "MRU": "MR", // Mauritania
    "MUR": "MU", // Mauritius
    "MVR": "MV", // Maldives
    "MWK": "MW", // Malawi
    "MXN": "MX", // Mexico
    "MYR": "MY", // Malaysia
    "MZN": "MZ", // Mozambique
    "NAD": "NA", // Namibia
    "NGN": "NG", // Nigeria
    "NIO": "NI", // Nicaragua
    "NOK": "NO", // Norway
    "NPR": "NP", // Nepal
    "NZD": "NZ", // New Zealand
    "OMR": "OM", // Oman
    "PAB": "PA", // Panama
    "PEN": "PE", // Peru
    "PGK": "PG", // Papua New Guinea
    "PHP": "PH", // Philippines
    "PKR": "PK", // Pakistan
    "PLN": "PL", // Poland
    "PYG": "PY", // Paraguay
    "QAR": "QA", // Qatar
    "RON": "RO", // Romania
    "RSD": "RS", // Serbia
    "RUB": "RU", // Russia
    "RWF": "RW", // Rwanda
    "SAR": "SA", // Saudi Arabia
    "SBD": "SB", // Solomon Islands
    "SCR": "SC", // Seychelles
    "SDG": "SD", // Sudan
    "SEK": "SE", // Sweden
    "SGD": "SG", // Singapore
    "SHP": "SH", // Saint Helena
    "SLL": "SL", // Sierra Leone
    "SOS": "SO", // Somalia
    "SRD": "SR", // Suriname
    "SSP": "SS", // South Sudan
    "STN": "ST", // Sao Tome and Principe
    "SYP": "SY", // Syria
    "SZL": "SZ", // Eswatini
    "THB": "TH", // Thailand
    "TJS": "TJ", // Tajikistan
    "TMT": "TM", // Turkmenistan
    "TND": "TN", // Tunisia
    "TOP": "TO", // Tonga
    "TRY": "TR", // Turkey
    "TTD": "TT", // Trinidad and Tobago
    "TVD": "TV", // Tuvalu
    "TWD": "TW", // Taiwan
    "TZS": "TZ", // Tanzania
    "UAH": "UA", // Ukraine
    "UGX": "UG", // Uganda
    "USD": "US", // United States
    "UYU": "UY", // Uruguay
    "UZS": "UZ", // Uzbekistan
    "VES": "VE", // Venezuela
    "VND": "VN", // Vietnam
    "VUV": "VU", // Vanuatu
    "WST": "WS", // Samoa
    "XAF": "CF", // Central African Republic
    "XCD": "EA", // Eastern Caribbean
    "XDR": "XF", // International Monetary Fund
    "XOF": "WA", // West African States
    "XPF": "PF", // French Overseas Territories
    "YER": "YE", // Yemen
    "ZAR": "ZA", // South Africa
    "ZMW": "ZM", // Zambia
    "ZWL": "ZW"  // Zimbabwe
  };
  
  ///////////////////// converter ////////////////////////////////
  
  const dropList = document.querySelectorAll(".drop-list select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  getButton = document.querySelector("form button");
  
  for (let i = 0; i < dropList.length; i++) {
    for(currency_code in country_code){
      let selected;
      if(i == 0){
        selected = currency_code == "SGD" ? "selected" : "";
      }else if(i == 1){
        selected = currency_code == "USD" ? "selected" : "";
      }
      let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
      dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }
    dropList[i].addEventListener("change", e =>{
      loadFlag(e.target);
    });
  }
  
  function loadFlag(element){
    for(code in country_code){
      if(code == element.value){
        let imgTag = element.parentElement.querySelector("img");
        imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`
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
  
  const exchangeIcon = document.querySelector(".drop-list .icon");
  exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
  });
  
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