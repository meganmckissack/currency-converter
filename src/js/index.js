import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';


$(document).ready(function() {
  $('#currencySelector').submit(function() {
    event.preventDefault();
    const currencyCode = $('#currency').val();
    console.log(currencyCode);
  });
  
});