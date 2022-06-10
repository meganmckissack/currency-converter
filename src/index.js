import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyService } from './js/currency-service.js';


(function() {
  let currencyInputAmount;

  function clearFields() {
    $('#errorMessage').html("");
    $('#currencyInput').val("");
  }
  
  async function conversionCall(currencyCode) {
    const response = await CurrencyService.convertCurrency(currencyCode);
    getData(response);
  }

  function getData(response) {
    if(response.result !== "success") {
      $('#errorMessage').html(`Please check your submission, your result retruned an error due to ${response["error-type"]}.`);
    } else {
      let exchangerateVal = parseFloat(response['conversion_rate']);
      $('#exchangeRate').html(`The current exchange rate for USD to ${response['target_code']} is ${exchangerateVal}.`);
      $('#conversionAmount').html(`${currencyInputAmount} US Dollars is equal to ${exchangerateVal * currencyInputAmount} ${response['target_code']}.`);
    }
  }

  $(document).ready(function() {
    $('#currencySelector').submit(function() {
      event.preventDefault();
      const currencyCode = $('#currency').val();
      currencyInputAmount = parseFloat($('#currencyInput').val());
      clearFields();
      conversionCall(currencyCode);
    });
  });
}) ();