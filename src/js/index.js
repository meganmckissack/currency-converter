import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { CurrencyService } from './currency-service.js';

async function conversionCall(currencyCode) {
  const response = await CurrencyService.convertCurrency(currencyCode);
  console.log(response);
}

$(document).ready(function() {
  $('#currencySelector').submit(function() {
    event.preventDefault();
    const currencyCode = $('#currency').val();
    conversionCall(currencyCode);
  });
  
});