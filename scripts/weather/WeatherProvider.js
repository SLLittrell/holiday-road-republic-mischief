


let weather = []

export const useWeather = () => weather.slice()

export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${'london'}&appid=e1aee22224215f64c1c3840f088e52ae`)
        .then(response => response.json())
        .then(
            parsedWeather => {
            console.table(parsedWeather)
            weather = parsedWeather
        })

}

