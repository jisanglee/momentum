const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = "26e5a41384bd3a2024cc41dcfeeafd26";

function getWeather(lat,lon){
    //then은 데이터가 완전히 다 들어 온 다음 호출하는거임.
    fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.list[0].main.temp;
        const place = json.list[0].name;
        weather.innerText = `${temperature} @ ${place}`;
    });
};

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
}
function handleGeoError(position){
    console.log("Cant access geo. Error!");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError); //using navigator api
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();

    }else{
        //getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}
function init(){
    loadCoords();
}

init();