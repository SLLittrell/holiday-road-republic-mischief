import { getItineraries, saveItineraries, useItineraries } from "./SaveDataProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".savedItinerary")
const warningElement = document.querySelector(".saveWarning")

//obj that is going to be saved
let savedItinerary = {
  "savedPark": "",
  "savedEatery": [],
  "savedAttraction": []
}

//whenever attraction is selected, changes the savedAttraction array
eventHub.addEventListener("attractionSelected", e => {
  savedItinerary.savedAttraction.push(e.detail.chosenAttraction)

})

//whenever eatery is selected, changes the savedEatery array
eventHub.addEventListener("eaterySelect", e => {
  savedItinerary.savedEatery.push(e.detail.eatery)
})

//whenever park is selected, changes the savedPark string
eventHub.addEventListener("parkChosen", e => {
  savedItinerary.savedPark = e.detail.parkName
})

//button event listener to save itinerary
eventHub.addEventListener("saveButtonClick", e => {
  //button can only be clicked if everything has a value
  if(savedItinerary.savedPark !== "" && savedItinerary.savedEatery !== [] && savedItinerary.savedAttraction !== []){
    warningElement.innerHTML = ""
    saveItineraries(savedItinerary)
      .then(getItineraries)
      .then(displayItineraries)
  }else{
    warningElement.innerHTML = "Finish your itinerary before saving!"
  }
})

//puts itineraries into DOM
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
              Attraction: ${itinerary.savedAttraction.map((x) =>  {return x}).join("<br>Attraction: ")}<br>
              Eatery: ${itinerary.savedEatery.map((x) =>  {return x}).join("<br>Eatery: ")}
            </div>
            `
          }).join("")}
        </div>
      `
    })
}
