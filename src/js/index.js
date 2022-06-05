import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { CurrencyService } from './currency-service.js';

(function() {
  let currencyInputAmount;

  async function conversionCall(currencyCode) {
    const response = await CurrencyService.convertCurrency(currencyCode);
    getData(response);
  }

  function getData(response) {
    if(response.result !== "success") {
      $('#errorMessage').html(`Please check your submission, your result retruned an error due to ${response["error-type"]}`);
    } else {
      let exchangerateVal = response['conversion_rate'];
      $('#exhangeRate').html(parseFloat(exchangerateVal));
      $('#conversionAmount').html(exchangerateVal * currencyInputAmount);
    }
  }

  $(document).ready(function() {
    $('#currencySelector').submit(function() {
      event.preventDefault();
      const currencyCode = $('#currency').val();
      currencyInputAmount = parseInt($('#currencyInput').val());
      conversionCall(currencyCode);
    });
  });
}) ();