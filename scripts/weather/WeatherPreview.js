import { getWeather, useWeather } from "./WeatherProvider.js"


const eventHub = document.querySelector("#container")
const weatherContainer = document.querySelector(".weatherPreview")

export const WeatherPreview = () => {
    getWeather()
    .then(() => {
        const weatherArray = useWeather()
            render(weatherArray)
    })

}
//   debugger 
let parkCity = "" 
const render= (weatherObject) => {
const weatherhtmlRep = `
        <div class="weather">
            <div>${parkCity}<br>${weatherObject.daily.map(dailyobj => {
                return `${dailyobj.weather.map(weatherobj => {
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
   console.log('heard')
    WeatherPreview()
    parkCity = customEvent.detail.parkCity
    
})       


        

