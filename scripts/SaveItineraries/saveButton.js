const contentTarget = document.querySelector(".saveItinerary")
const eventHub = document.querySelector("#container")

//renders save button
export const saveButton = () => {
  contentTarget.innerHTML = `
    <button id="saveItinerary">Save Itinerary</button>
  `
}

//event listener for save button click
eventHub.addEventListener("click", e => {
  if (e.target.id === "saveItinerary") {
    const customEvent = new CustomEvent("saveButtonClick")
    eventHub.dispatchEvent(customEvent)
  }
})