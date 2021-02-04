import { saveItineraries } from "./SaveDataProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".savedItinerary")

eventHub.addEventListener("saveButtonClick", e => {
  const savedItinerary = {
    "savedPark": document.querySelector(".parkName").innerHTML,
    "savedEatery": document.querySelector(".eateryContainer").innerHTML,
    "savedAttraction": document.querySelector(".attractionContainer").innerHTML.trim()
  }
  
  saveItineraries(savedItinerary)
})