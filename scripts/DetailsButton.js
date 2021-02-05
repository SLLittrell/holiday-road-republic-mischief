export const attractionDetailsButton = () => {
    return `<button id="attractionDetail" class="detail">Details</button>`

}

export const eateriesDetailsButton = () => {
    return `<button id="eateriesDetail" class="detail">Details</button>`

}

export const parksDetailsButton = () => {
    return `<button id="parksDetail" class="detail">Details</button>`
}

const eventHub = document.querySelector("#container")

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

