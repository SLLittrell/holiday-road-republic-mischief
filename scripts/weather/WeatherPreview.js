import { getWeather, useWeather } from "./WeatherProvider.js"


const eventHub = document.querySelector("#container")
const weatherContainer = document.querySelector(".weatherPreview")

export const WeatherPreview = () => {
    getWeather()
    .then(() => {
        const weatherArray = useWeather()
        const fiveDayArray = weatherArray.daily.slice(0,5)
            render(fiveDayArray)
    })

}
//   debugger 
let parkCity = "" 
let parkState = ""
const render= (weatherObject) => {
const weatherhtmlRep = `
        <div class="weather">
            <div class="weather__cityState">${parkCity}, ${parkState}</div>
            <div class="dailyWeather">${weatherObject.map(dailyobj => {
                return `
                   <div class="weatherDay"> ${new Date(dailyobj.dt * 1000).toLocaleDateString("en-US")}<br>
                    ${dailyobj.weather.map(weatherobj => {
                        return `${weatherobj.description}`})}
                Feels like: ${Math.round(dailyobj.feels_like.day)}&#8457<br>
                Hi: ${Math.round(dailyobj.temp.max)}&#8457 <br>
                Low: ${Math.round(dailyobj.temp.min)}&#8457</div><br>`
            }).join(" ")}
            </div>
        </div>
        `
            weatherContainer.innerHTML = weatherhtmlRep
        }
        

eventHub.addEventListener("parkChosen", customEvent => {
//    console.log('heard')
    WeatherPreview()
    parkCity = customEvent.detail.parkCity
    parkState = customEvent.detail.parkState
    
})       


        

