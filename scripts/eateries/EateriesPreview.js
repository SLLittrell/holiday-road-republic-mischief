import { eateriesDetailsButton } from "../DetailsButton.js"
import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector('#container')
const eateriesContainer = document.querySelector('.eateryContainer')

// This variable takes data from the eaterySelect event and allows us to use it in other functions due to it being in global scope.
let eateryBusiness = ''


// Listening for the change event and rendering the dropdown selection itself.
eventHub.addEventListener('eaterySelect', eaterySelectEvent => {
    if (eaterySelectEvent.detail.eatery !== "0") {
        eateriesContainer.innerHTML += `
        ${eaterySelectEvent.detail.eatery}
        ${eateriesDetailsButton()}`
        return eateryBusiness = eaterySelectEvent.detail.eatery
    }
})

// This function listens for the details button to be clicked and then renders a description and address for the selected eatery.
const dialogContainer = document.querySelector(".eateryDialogBox")

eventHub.addEventListener('DetailsClickedEvent', event => {
    if (event.detail.id === event.detail.id) {
        const contentTarget = document.querySelector('.eateryContainer')
        const eateriesArray = useEateries()
        const eateryObject = eateriesArray.find(eateryObject => eateryObject.businessName === event.detail.id)
        dialogContainer.innerHTML += `
        <dialog class="eateryDialog" open>${eateryObject.description} Located in ${eateryObject.city}, ${eateryObject.state}<br>
        <button id="eateryCloseButton">Close</button>
        </dialog>
        `
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "eateryCloseButton") {
        dialogContainer.innerHTML = ``
    }})