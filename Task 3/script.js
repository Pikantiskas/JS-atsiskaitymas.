/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const button = document.querySelector("#btn");
const result = document.querySelector("#output");
result.setAttribute("class", "profile");

function showUsers(data) {
  result.innerHTML = "";

  data.forEach((item) => {
    const picture = document.createElement("img");
    picture.src = item.avatar_url;
    picture.setAttribute("class", "image");

    const personsPicture = document.createElement("div");
    personsPicture.append(picture);

    const login = document.createElement("div");
    login.innerText = item.login;
    login.setAttribute("class", "name");

    const card = document.createElement("div");
    card.append(personsPicture, login);

    result.append(card);
  });
}

async function getData() {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

function init() {
  getData().then((data) => showUsers(data));
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  init();
});
