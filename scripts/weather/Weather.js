export const Weather = (weather) => {
    return `
       <div class="weather">
        <div>Temp ${weather.main.temp}</div>
        <div>Day ${weather.dt}</div>
       </div>
    `
}