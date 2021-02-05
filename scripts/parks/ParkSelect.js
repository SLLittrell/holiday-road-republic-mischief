import { getParks, useParks } from "./ParkProvider.js"

const contentTarget = document.querySelector(".dropdown__nationalPark")
const eventHub = document.querySelector("#container")

export const parkDropdown = () => {
  getParks()
    .then(() => {
      const parkOptions = useParks().data
      render(parkOptions)
  })
}

const render = parkOptions => {
  contentTarget.innerHTML = `
    <select id="parkSelect">
      <option value="">Please select a park...</option>
      ${
        parkOptions.map(park => {
          return `<option>${park.fullName}</option>`
        })
      }
    </select>
  `
}

eventHub.addEventListener("change", e => {
  if (e.target.id === "parkSelect") {
    const parkName = e.target.value
    let latitude = ""
    let longitude = ""
    let parkCity = ""
    let parkState = ""
    getParks()
      .then(() => {
        const parkList = useParks().data
        for (const park of parkList) {
          if (park.fullName === parkName) {
            latitude = park.latitude
            longitude = park.longitude
            parkCity = park.addresses[0].city
            parkState = park.states
          }
        }
        const customEvent = new CustomEvent("parkChosen", {
          detail: {
            "parkName": parkName,
            "parkCity" : parkCity,
            "latitude" : latitude,
            "longitude" : longitude,
            "parkState" : parkState
          }
        })
        eventHub.dispatchEvent(customEvent)
      })
  }
})