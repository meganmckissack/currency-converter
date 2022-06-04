export class CurrencyService {
  static async convertCurrency(currencyCode) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/pair/USD/${currencyCode}`);
      if(!response.ok) {
        throw Error(response.statusText);
      } return response.json();
    } catch(error) {
      console.log(error.response["error-type"]);
      return error.toString();
    }
  } 
}


