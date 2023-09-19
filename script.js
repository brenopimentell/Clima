// 0ecd58af8a8f0615ddb176545ac3ff5a   => CHAVE API


1 //Variavéis e seleção de elementos
const apiKey = "0ecd58af8a8f0615ddb176545ac3ff5a";
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");


// Seleção de elementos
const cityElement = document.querySelector("#city");
const countryElement = document.querySelector("#country");
const tempElement = document.querySelector("#temperate span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");


3 //Funções
//essa função vai exibir os dados da API 
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

   return data

};

//essa vai acessar os dados da API
const showWheatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    tempElement.innerHTML = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    umidityElement.innerText = `${data.main.umidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
}



2 //Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWheatherData(city);
})