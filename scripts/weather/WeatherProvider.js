


let weather = []

export const useWeather = () => weather

export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/find?q=${'Nashville'}&units=imperial&appid=e1aee22224215f64c1c3840f088e52ae`)
        .then(response => response.json())
        .then(
            parsedWeather => {
            console.table(parsedWeather)
            weather = parsedWeather
        })

}

