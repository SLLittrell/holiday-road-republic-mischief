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
            <div>${parkCity}, ${parkState}<br>${weatherObject.map(dailyobj => {
                return `${new Date(dailyobj.dt * 1000).toLocaleDateString("en-US")}<br>${dailyobj.weather.map(weatherobj => {
                    return `${weatherobj.description}`
                })}<br>Feels like ${dailyobj.feels_like.day}&#8457<br>
                Hi ${dailyobj.temp.max}&#8457 
                Low ${dailyobj.temp.min}&#8457 <br>`
            }).join(" ")}</div> 
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


        

