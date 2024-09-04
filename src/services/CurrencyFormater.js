function CurrencyFormater(amount, Currency) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: Currency.toUpperCase(),
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }
  

export default CurrencyFormater;