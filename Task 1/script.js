/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const getResult = document.querySelector("#submit-btn");
const result = document.querySelector("#output");

getResult.addEventListener("click", (e) => {
  e.preventDefault();
  const kilograms = document.querySelector("#search").value;
  const lb = (kilograms * 2.2046).toFixed(2);
  const g = (kilograms / 0.001).toFixed(2);
  const oz = (kilograms * 35.274).toFixed(2);

  result.innerHTML = `
    <h2><span>Pounds:</span> ${kilograms} kg = <span>${lb} lb</span></h2>
    <h2><span>Grams:</span> ${kilograms} kg = <span>${g} g</span></h2>
    <h2><span>Ounce:</span> ${kilograms} kg = <span>${oz} oz</span></h2>
    `;
});
