const eventHub = document.querySelector("#container")

// Attractions
let attraction = ""

    // Saves the name of the chosen attractions to attraction variable
eventHub.addEventListener("attractionSelected", event => {
    attraction = event.detail.chosenAttraction

})

    // Function to render Details button using attraction name
export const attractionDetailsButton = () => {
    return `<button id="${attraction}" class="detail__attraction">Details</button>`

}



// Eateries
let eatery = ""

    // Saves the name of the chosen attractions to attraction variable
eventHub.addEventListener("eaterySelect", event => {
    eatery = event.detail.eatery

})
    // Function to render Details button using attraction name
export const eateriesDetailsButton = () => {
    return `<button id="${eatery}" class="detail__eatery">Details</button>`

}

// Parks
export const parksDetailsButton = () => {
    return `<button id="parksDetail" class="detail">Details</button>`
}



// General
    //Dispatches custom event when someone clicks Detail button 
eventHub.addEventListener("click", event => {
    
    if (event.target.className.includes("detail")) {
    let [prefix, type] = event.target.className.split("__")
    const customEvent = new CustomEvent("DetailsClickedEvent", {
    detail: {
        id: event.target.id,
        className: type
    }
    })
    eventHub.dispatchEvent(customEvent)
    
}

})

