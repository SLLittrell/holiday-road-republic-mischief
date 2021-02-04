import { settings } from "../Settings.js"



let weather = []

export const useWeather = () => weather

export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/find?q=${'Nashville'}&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
            console.table(parsedWeather)
            weather = parsedWeather
        })

}

const eventHub = document.querySelector("#container")

eventHub.addEventListener("parkChosen", customEvent => {
     const city = customEvent.detail.parkCity
     return city
 })