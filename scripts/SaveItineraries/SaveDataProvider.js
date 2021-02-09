const eventHub = document.querySelector("#container")

let savedItineraries = []

//dispatches an event when itinerary is saved
const dispatchStateChangeEvent = () => {
  const customEvent = new CustomEvent("itinerarySaved")
  eventHub.dispatchEvent(customEvent)
}

//returns saved itineraries array
export const useItineraries = () => {
  return savedItineraries.slice()
}

//gets data from local api and puts it into savedItineraries
export const getItineraries = () => {
  return fetch("http://localhost:8088/itineraries")
    .then(response => response.json())
    .then(parsedResponse => {
      savedItineraries = parsedResponse
    })
}

//saves an obj into local api
export const saveItineraries = itinerary => {
  let stringifiedObj = JSON.stringify(itinerary)
  return fetch("http://localhost:8088/itineraries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: stringifiedObj
  })
  .then(getItineraries)
  .then(dispatchStateChangeEvent)
}

