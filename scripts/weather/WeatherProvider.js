import { settings } from "../Settings.js"


//Stores weather api in an array
let weather = []
//stores api info from parks api sent in the evenListener
let lat = ""
let lon = ""

export const useWeather = () => weather

//Use fetch to get data from weather api, use string interp. to add api key from settings.js and Lat & Long fom Park api.
export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts,current&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            parsedWeather => {
            weather = parsedWeather
        })

}

const eventHub = document.querySelector("#container")

// Event Listener, listening for a chosen park in dropdown, lat & lon data recieved
eventHub.addEventListener("parkChosen", customEvent => {
     lat = customEvent.detail.latitude
     lon = customEvent.detail.longitude

 })