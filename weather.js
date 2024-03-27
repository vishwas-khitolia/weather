let inputvalue = document.querySelector("#city");
let btn = document.querySelector("#submit");
let city = document.querySelector("#cityoutput");
let description = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

let apik = "fcb1b1f3e6bec7a36ee1f44fd9eea71d";

function conversion(val) {
  return (val - 273).toFixed(3);
}

btn.addEventListener("click", function (event) {
  event.preventDefault();

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      let nameval = data.name;
      let descrip = data.weather[0].description;
      let temperature = data.main.temp;
      let windspeed = data.wind.speed;

      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`;
      description.innerHTML = `Sky condition: <span>${descrip}</span>`;
      wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
    })
    .catch((err) => alert("You entered the wrong city name"));
});
