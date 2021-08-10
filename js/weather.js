const API_KEY = "c652c5654244cadce6678d386a88befd";

function onGeoSucces(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(URL).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        // const weather = document.querySelector("#weather span:mid-child");
        const temp = document.querySelector("#weather span:last-child");
        city.innerText = `현재 위치는 ${data.name}이고 `;
        // weather.innerText = `날씨는 ${data.weather[0].main}!!`;
        temp.innerText = `온도는 ${data.main.temp}, 날씨는 ${data.weather[0].main}!!`;
    });
 }

 function onGeoError() {
    alert("현위치 조회가 안됨ㅋ 날씨 안알랴줌");
 }

 navigator.geolocation.getCurrentPosition(onGeoSucces, onGeoError);