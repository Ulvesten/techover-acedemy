const api = {
key: "ff9eb3dbbebdb0398f765d529efea7c0",
baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbar = document.querySelector('.searchbar');
searchbar.addEventListener('keypress',setQuery);

function setQuery(evt) {
if(evt.keyCode == 13){
getResults(searchbar.value)
console.log(searchbar.value)
 }
}
function getResults(Query){
fetch(`${api.baseurl}weather?q=${Query}&units=metric&APPID=${api.key}`)
.then(weather => {return weather.json()}) 
.then(displayResults);
}
function displayResults(weather){
console.log(weather);
let city = document.querySelector('.city');
city.innerText = `${weather.name}, ${weather.sys.country}`;

let Now = new Date();
let date = document.querySelector('.date');
date.innerText = dateToday(Now);

let temp = document.querySelector('#WheaterNowDegrees')
temp.innerText = `${(weather.main.temp)}`;

let weatherword = document.querySelector('.WhetherNowWord');
weatherword.innerText = weather.weather[0].main;

let highlow = document.querySelector('.WheaterHighLow');
highlow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
function dateToday(d) {
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
return `${day} ${date} ${month} ${year}`;
}