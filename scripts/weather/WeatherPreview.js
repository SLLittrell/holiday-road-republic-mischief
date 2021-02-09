import { getWeather, useWeather } from "./WeatherProvider.js"


const eventHub = document.querySelector("#container")
const weatherContainer = document.querySelector(".weatherPreview")

//Use .then to import weather array from weather provider
export const WeatherPreview = () => {
    getWeather()
    .then(() => {
        const weatherArray = useWeather()
        const fiveDayArray = weatherArray.daily.slice(0,5)
            render(fiveDayArray)
    })

}
//   debugger 
// variables to store data sent in park event listener
let parkCity = "" 
let parkState = ""
const render= (weatherObject) => {
//convert data to HTML using string interp
//input data sent in park select event listener (City & State)
//.map to iterate over weather api array
// Returns the next 5 dates in a string, daily tempurature, and Min/Max daily temp.
// Also maps over a nested api array to return weather Icons and discription (cloud cover)
const weatherhtmlRep = `
        <div class="weather">
            <h2>Local Weather</h2>
            <div class="weather__cityState">${parkCity}, ${parkState}</div>
            <div class="dailyWeather">
            ${weatherObject.map(dailyobj => {
                return `
                   <div class="weatherDay"> ${new Date(dailyobj.dt * 1000).toDateString("en-US")}<br>
                    ${dailyobj.weather.map(weatherObj => {
                        return `<img src=" http://openweathermap.org/img/wn/${weatherObj.icon}@2x.png"><br>
                                ${weatherObj.description}`})}<br>
                Feels like: ${Math.round(dailyobj.feels_like.day)}&#8457<br>
                Hi: ${Math.round(dailyobj.temp.max)}&#8457 <br>
                Low: ${Math.round(dailyobj.temp.min)}&#8457</div><br>`
            }).join(" ")}
            </div>
        </div>
        `
            weatherContainer.innerHTML = weatherhtmlRep
        }
        
//Event Listener from Park select,listens for event and calls the above function WeatherPreview() (Also Park City and State)
eventHub.addEventListener("parkChosen", customEvent => {
//    console.log('heard')
    WeatherPreview()
    parkCity = customEvent.detail.parkCity
    parkState = customEvent.detail.parkState
    
})       


        

