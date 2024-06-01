// function extractCurrencyValue(string, rate) {
//   let dollar = parseFloat(string.replace("$", ""));
//   let bath = dollar * rate;
//   return bath;
// }


 extractCurrencyValue = (string, rate) => {
  let dollar = parseFloat(string.replace("$", ""));
  let bath = dollar * rate;
  return bath;
}
console.log(extractCurrencyValue("$120", 30));
console.log(extractCurrencyValue("$120", 36));
