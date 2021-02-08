const eventHub = document.querySelector("#container")

// Attractions
let attraction = ""

    // Saves the name of the chosen attractions to attraction variable
eventHub.addEventListener("attractionSelected", event => {
    attraction = event.detail.chosenAttraction

})

    // Function to render Details button using attraction name
export const attractionDetailsButton = () => {
    return `<button id="${attraction}" class="detail">Details</button>`

}



// Eateries
let eatery = ""

    // Saves the name of the chosen attractions to attraction variable
eventHub.addEventListener("eaterySelect", event => {
    eatery = event.detail.eatery

})
    // Function to render Details button using attraction name
export const eateriesDetailsButton = () => {
    return `<button id="${eatery}" class="detail">Details</button>`

}

// Parks
export const parksDetailsButton = () => {
    return `<button id="parksDetail" class="detail">Details</button>`
}



// General
eventHub.addEventListener("click", event => {
    if (event.target.className === "detail") {
    const customEvent = new CustomEvent("DetailsClickedEvent", {
        detail: {
            id: event.target.id
        }
    })
    eventHub.dispatchEvent(customEvent)
    
}

})

