const contentTarget = document.querySelector(".saveItinerary")
const eventHub = document.querySelector("#container")

const saveButton = () => {
  contentTarget.innerHTML = `
    <button id="saveItinerary">Save Itinerary</button>
  `
}

eventHub.addEventListener("click", e => {
  if (e.target.id === "saveItinerary") {
    const customEvent = new CustomEvent("saveButtonClick")
    eventHub.dispatchEvent(customEvent)
  }
})