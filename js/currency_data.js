let response, data, convertFrom, convertTo;

const from = document.querySelector('.calc--from');
const to = document.querySelector('.calc--to');
const sum = document.querySelector('.calc--amount');
const submit = document.querySelector('.calc--submit');
const baseAmount = document.querySelector('.calc__result--base-currency');
const result = document.querySelector('.calc__result--request');
const currencyReq = document.querySelector('.calc__result--request-currency');
const updated = document.querySelector('.calc__result--timestamp');
const rate = document.querySelector('.calc__result-exchange-rate');
const answer = document.querySelector('.calc__result');
const preLoader = document.querySelector('.calc__result-loader');


submit.addEventListener('click', async (e) => {
  e.preventDefault();
    try {
      answer.style.display = 'none';
      getCurrency();
      const total = parseFloat(sum.value);
      response = await fetch(`https://data.fixer.io/api/convert?access_key=05989f30f0f7bcb0f23c3913ea80e662&from=${currencyFrom}&to=${currencyTo}&amount=${total}`);
      data = await response.json();
      load();
    } 
    catch (error) {
      console.log(error);
    }
})

function load() {
  preLoader.style.display = 'block';
  const loading = setTimeout(showResult, 1200);
}

function showResult() {
  preLoader.style.display = 'none';
  answer.style.display = 'block';
  rate.textContent = '1' + ' ' + currencyFrom + ' = ' + data.info.rate + ' ' + currencyTo;
  const roundResult = Math.round(data.result * 100) / 100;
  baseAmount.textContent = sum.value + ' ' + currencyFrom + ' =';
    if (currencyTo === 'EUR') {
    result.textContent = '€' + roundResult;
    currencyReq.textContent = currencyTo;
    } else if (currencyTo === 'USD' || currencyTo === 'AUD' || currencyTo === 'CAD' || currencyTo === 'NZD') {
      result.textContent = '$' + roundResult;
      currencyReq.textContent = currencyTo;
    } else if (currencyTo === 'GBP') {
      result.textContent = '£' + roundResult;
      currencyReq.textContent = currencyTo; 
    } else if (currencyTo === 'INR') {
      result.textContent = '₹' + roundResult;
      currencyReq.textContent = currencyTo;
    } else if (currencyTo === 'SGD') {
      result.textContent = 'S$' + roundResult;
      currencyReq.textContent = currencyTo;
    } else if (currencyTo === 'TRY') {
      result.textContent = '₺' + roundResult;
      currencyReq.textContent = currencyTo;
    } else if (currencyTo === 'CHF') {
      result.textContent = roundResult;
      currencyReq.textContent = 'CHF'; 
    } else {
      result.textContent = roundResult;
      currencyReq.textContent = '';
    }
    convertTime()
  };
   
