export class CurrencyService {
  static async convertCurrency(currencyCode) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyCode}`);
    return response.json();
  }
}

// next step - add error handling 