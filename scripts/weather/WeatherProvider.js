import { settings } from "../Settings.js"



let weather = []
let city = ""
export const useWeather = () => weather

export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
            console.log(parsedWeather)
            weather = parsedWeather
        })

}

const eventHub = document.querySelector("#container")

eventHub.addEventListener("parkChosen", customEvent => {
     city = customEvent.detail.parkCity
     return city
 })