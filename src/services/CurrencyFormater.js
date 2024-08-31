function formatIndianCurrency(amount, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency.toLowerCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}


export default formatIndianCurrency;