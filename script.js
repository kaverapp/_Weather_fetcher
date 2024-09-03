const takeInp=document.querySelector("#city");
const cityName=document.querySelector("#cityName");
const temperature=document.querySelector(".temp");
const weatherDescription=document.querySelector(".weDe");
const humidity=document.querySelector(".humi");
const windSpeed=document.querySelector(".winS");
const weatherImg=document.querySelector("#weatherImage");
const butt=document.querySelector("#getWeather")

const apiKey="eb860ab160ef6aa226032a644ac2b488";


const imgArr=[
    "public_img/bright_sky.jpg",
    "public_img/cloudy.jpeg",
    "public_img/rainy.jpeg",
    "public_img/fogMist.jpeg",
    "public_img/partly_cloudy.webp",
    "public_img/snow.jpeg",
    "public_img/thunderstorm.jpeg",
    "public_img/thunderstorm.jpeg",
    "public_img/windy.jpeg",

]


butt.addEventListener("click",(e)=>{
    e.preventDefault();
    cityName.innerHTML = takeInp.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.innerHTML}&appid=${apiKey}`;
    const getRes=async()=>{
        const response=await fetch(url);
        const parse=await response.json();
        console.log(parse);
        
        weatherImg.src=imgArr[1];
       
        

        temperature.innerHTML = `Temperature: ${parse.main.temp-273.15} °C`;
        weatherDescription.innerHTML = `Weather: ${parse.weather[0].description}`;
        humidity.innerHTML = `Humidity: ${parse.main.humidity}%`;
        windSpeed.innerHTML = `Wind Speed: ${parse.wind.speed} m/s`;

        const f=parse.weather[0].main.toLowerCase();
        switch (f) {
            case 'clear':
                weatherImg.src = imgArr[0];
                break;
            case 'clouds':
                weatherImg.src = imgArr[1];
                break;
            case 'rain':
            case 'drizzle':
                weatherImg.src = imgArr[2];
                break;
            case 'fog':
            case 'mist':
            case 'haze':
                weatherImg.src = imgArr[3];
                break;
            case 'snow':
                weatherImg.src = imgArr[5];
                break;
            case 'thunderstorm':
                weatherImg.src = imgArr[6];
                break;
            case 'wind':
                weatherImg.src = imgArr[7];
                break;
            default:
                weatherDescription.src=imgArr[0]
        }
    }
    getRes();
    

})


