export class CurrencyService {
  static async convertCurrency(currencyCode) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyCode}`);
      if(response.status !== 200 && response === 403) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    } catch(error) {
      return error.response;
    }
  }
}
