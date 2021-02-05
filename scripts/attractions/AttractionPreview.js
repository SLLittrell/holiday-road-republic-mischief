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


const dialogContainer = document.querySelector(".dialogBox")

eventHub.addEventListener('DetailsClickedEvent', event => {
    if (event.detail.id === 'attractionDetail') {
        const attractionsArray = useAttractions()
        const attractionObj = attractionsArray.find(attractionObj => attractionObj.name === attractionName)
        dialogContainer.innerHTML += `
        <dialog open>${attractionObj.description} Located in ${attractionObj.city}, ${attractionObj.state}<br>
        <button id="closeButton">Close</button>
        </dialog>`
    }
}) 

eventHub.addEventListener("click", event => {
    if (event.target.id === "closeButton") {
        dialogContainer.innerHTML = ``
    }})