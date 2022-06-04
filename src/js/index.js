import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { CurrencyService } from './currency-service.js';

async function conversionCall(currencyCode) {
  const response = await CurrencyService.convertCurrency(currencyCode);
  getData(response);
  console.log(response);
}

function getData(response) {
  if(response.result !== "success") {
    console.log(response["error-type"]);
  } else {
    console.log(response["conversion_rate"]);
  }
}

$(document).ready(function() {
  $('#currencySelector').submit(function() {
    event.preventDefault();
    const currencyCode = $('#currency').val();
    conversionCall(currencyCode);
  });
  
});