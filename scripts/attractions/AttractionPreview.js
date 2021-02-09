import { getAttractions, useAttractions } from "./AttractionProvider.js"
import { attractionDetailsButton } from "../DetailsButton.js"

// Listens for attractionSelected event and runs the render preview function if the selected item matches the attraction chosen
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".attractionContainer")

let  attractionName= ""

// Adds selected attraction and Details button to DOM when attraction is selected
eventHub.addEventListener("attractionSelected", event => {
    
            contentTarget.innerHTML +=  `
                ${event.detail.chosenAttraction}
                ${attractionDetailsButton()}</br>
            `
            return attractionName = event.detail.chosenAttraction
        })


//Renders description, city, state, and amenities to DOM when Details is clicked 
const dialogContainer = document.querySelector(".attractionDialogBox")

eventHub.addEventListener('DetailsClickedEvent', event => {
    if (event.detail.className === "attraction") {
        const attractionsArray = useAttractions()
        const attractionObj = attractionsArray.find(attractionObj => attractionObj.name === event.detail.id)
        const ameneties = () => {
            // debugger  
            if (attractionObj.ameneties.restrooms === true ) { 
            return '<img class="restrooms" src="../images/toilet.png">'
            }
            else {
                return ""
            }
        }
        dialogContainer.innerHTML += `
        <dialog class="attractionDialog" open>${attractionObj.description} Located in ${attractionObj.city}, ${attractionObj.state}<br>
        <button id="attractionCloseButton">Close</button>
        <div class="accessible">${ameneties()}</div>
        </dialog>`
    }
}) 

// Closes dialog box when Close is clicked
eventHub.addEventListener("click", event => {
    if (event.target.id === "attractionCloseButton") {
        dialogContainer.innerHTML = ``
    }})