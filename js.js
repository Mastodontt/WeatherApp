const Container = document.querySelector(".container");
const SearchInput = document.querySelector("#search");



const API = "7ddc73a35d5cc0bb052dc98c5e327e51";

let WeatherInfo = [

]


const getWeather = () =>{
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
         let long = position.coords.longitude;
         let coordinates = {
             lat:lat,
             long:long
         }
         
       
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${API}`)
    .then(response =>response.json())
    .then(data =>{console.log(data);
        
        let x={
            name:data.name,
            main:data.weather[0].main,
            description:data.weather[0].description,
            icon:data.weather[0].icon,
            tempCels:data.main.temp - 273.15
        };
        WeatherInfo.push(x);
        console.log(WeatherInfo);
        DisplayWeather(x);
        
    });
});
 
    
   
}



//wyświetlam informacje w domie


const DisplayWeather = (weather) =>{
    const box = document.createElement("div");
    box.className="box";
    const img = document.createElement("img");
    img.src=`https://openweathermap.org/img/wn/${weather.icon}@2x.png`
    box.appendChild(img);

    const cityname = document.createElement("h3");
    cityname.innerText = weather.name;
    box.appendChild(cityname);


 
    
 
    
    const temperature = document.createElement("p");
    temperature.className = "temperature";
    let Celsiustemp = Math.round(weather.tempCels);
    temperature.innerText = Celsiustemp+"°C";
    box.appendChild(temperature);

  
    const text = document.createElement("p");
    text.innerText=weather.description;
    box.appendChild(text);

    Container.appendChild(box);
}



getWeather(); 


 
       
      
           

        
       
