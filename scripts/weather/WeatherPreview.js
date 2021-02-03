import { getWeather, useWeather } from "./WeatherProvider.js"


const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".weatherPreview")

export const WeatherPreview = () => {
    getWeather()
    .then(() => {
        const weatherArray = useWeather()
            renderWeather(weatherArray)
    })

    
    const renderWeather = (weatherObject) => {
        const weatherhtmlRep = `
        <div class="weather">
        <div>Day ${weather.dt}</div> ${weatherObject.main.map(mainobj => {
            return `
            <div>Temp ${weather.main.temp}</div>`
        })}
        </div>
        `
        weatherContainer.innerHTML = weatherhtmlRep
    }
    
}

// eventHub.addEventListener("parkChosen", customEvent => {
//    WeatherPreview()
    
// })

