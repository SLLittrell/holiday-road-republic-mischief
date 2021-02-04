import { settings } from "../Settings.js"



let weather = []
let lat = ""
let lon = ""

export const useWeather = () => weather

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts,current&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
            console.log(parsedWeather)
            weather = parsedWeather
        })

}

const eventHub = document.querySelector("#container")

eventHub.addEventListener("parkChosen", customEvent => {
     lat = customEvent.detail.latitude
     lon = customEvent.detail.longitude

 })