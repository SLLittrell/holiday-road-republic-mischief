import { getItineraries, saveItineraries, useItineraries } from "./SaveDataProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".savedItinerary")
const warningElement = document.querySelector(".saveWarning")

let savedItinerary = {
  "savedPark": "",
  "savedEatery": "",
  "savedAttraction": ""
}

eventHub.addEventListener("attractionSelected", e => {
  savedItinerary.savedAttraction = e.detail.chosenAttraction
})

eventHub.addEventListener("eaterySelect", e => {
  savedItinerary.savedEatery = e.detail.eatery
})

eventHub.addEventListener("parkChosen", e => {
  savedItinerary.savedPark = e.detail.parkName
})

eventHub.addEventListener("saveButtonClick", e => {
  if(savedItinerary.savedPark !== "" && savedItinerary.savedEatery !== "" && savedItinerary.savedAttraction !== ""){
    warningElement.innerHTML = ""
    saveItineraries(savedItinerary)
      .then(getItineraries)
      .then(displayItineraries)
  }else{
    warningElement.innerHTML = "Finish your itinerary before saving!"
  }
})

export const displayItineraries = () => {
  getItineraries()
    .then(() => {
      const itineraryList = useItineraries()

      contentTarget.innerHTML = `
        <div class="itineraryList">
          ${itineraryList.map(itinerary => {
            return `
            <div class="itineraryCard">
              Park: ${itinerary.savedPark}<br>
              Attraction: ${itinerary.savedAttraction}<br>
              Eatery: ${itinerary.savedEatery}<br>
            </div>
            `
          }).join("")}
        </div>
      `
    })
}
