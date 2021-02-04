import { getAttractions, useAttractions } from "./AttractionProvider.js"
import { attractionDetailsButton } from "../DetailsButton.js"

// Listens for attractionSelected event and runs the render preview function if the selected item matches the attraction chosen
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".attractionContainer")

eventHub.addEventListener("attractionSelected", event => {
    
            contentTarget.innerHTML =  `
                ${event.detail.chosenAttraction}
                ${attractionDetailsButton()}
            `
        })
