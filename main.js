//download elements
const title = document.querySelector(".intro");
const btn = document.querySelector(".start");
const jokeTXT = document.querySelector(".border p");
const txtBubble = document.querySelector(".border");
const joke = document.querySelector(".screen");
let text = "";

//url + headers
const URL = "https://icanhazdadjoke.com/";
let headers = new Headers({
  Accept: "application/json",
  "User-Agent": "https://github.com/graycrovv",
});

//array with colors (can add more colors later: /newColor/ works with any number)
const colorsArr = [
  "F61379",
  "FF8700",
  "850AD6",
  "490FD2",
  "153AE0",
  "12B2E2",
  "005AE0",
  "FFA10A",
  "F50062",
  "00B4DD",
  "691a1a",
  "297c3b",
  "307f85",
];

//remove "title" screen
function removeIntro() {
  title.remove();
}
setTimeout(removeIntro, 5000);

//call all needed functions (on /click/)
function getAJoke() {
  fetchNewJoke();
  newColor();
  changeBtn();

  //remove "opacity: 0" from MAIN SCREEN
  joke.classList.remove("hidden");
}

//fetch a joke (with every click)
function fetchNewJoke() {
  fetch(URL, {
    headers: headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("something went wrong (HTTP)");
      }
    })
    .then((data) => {
      console.log(data);
      jokeObject(data); //pass the data to jokeObject function
    })
    .catch((error) => console.error(error.message));
}

// change button TXT
function changeBtn() {
  btn.textContent = "another one";
}

//paste TXT from API
function jokeObject(data) {
  text = data.joke;
  jokeTXT.textContent = text;
}

//color changes
function newColor() {
  const index = Math.floor(Math.random() * colorsArr.length);
  txtBubble.style.backgroundColor = `#${colorsArr[index]}`;
  btn.style.backgroundColor = `#${colorsArr[index]}`;
}

btn.addEventListener("click", getAJoke);
