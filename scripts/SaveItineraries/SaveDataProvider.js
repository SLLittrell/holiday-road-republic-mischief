const eventHub = document.querySelector("#container")

let savedItineraries = []

const dispatchStateChangeEvent = () => {
  const customEvent = new CustomEvent("itinerarySaved")
  eventHub.dispatchEvent(customEvent)
}

export const useItineraries = () => {
  return savedItineraries.slice()
}

export const getItineraries = () => {
  return fetch("http://localhost:8088/itineraries")
    .then(response => response.json())
    .then(parsedResponse => {
      savedItineraries = parsedResponse
    })
}

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

