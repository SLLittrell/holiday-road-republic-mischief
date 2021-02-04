import { getAttractions, useAttractions } from "./AttractionProvider.js"
import { attractionDetailsButton } from "../DetailsButton.js"

// Listens for attractionSelected event and runs the render preview function if the selected item matches the attraction chosen
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".attractionContainer")

let  attractionName= ""

eventHub.addEventListener("attractionSelected", event => {
    
            contentTarget.innerHTML =  `
                ${event.detail.chosenAttraction}
                ${attractionDetailsButton()}
            `
            return attractionName = event.detail.chosenAttraction
        })

eventHub.addEventListener('DetailsClickedEvent', event => {
    if (event.detail.id === 'attractionDetail') {
        const contentTarget = document.querySelector('.attractionContainer')
        const attractionsArray = useAttractions()
        const attractionObj = attractionsArray.find(attractionObj => attractionObj.name === attractionName)
        contentTarget.innerHTML += `
        <dialog open>${attractionObj.description} Located in ${attractionObj.city}, ${attractionObj.state}</dialog>`
    }
}) 