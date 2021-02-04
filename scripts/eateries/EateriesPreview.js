import { eateriesDetailsButton } from "../DetailsButton.js"

const eventHub = document.querySelector('#container')
const eateriesContainer = document.querySelector('.eateryContainer')

// Listening for the change event and rendering the dropdown selection itself
eventHub.addEventListener('eaterySelect', eaterySelectEvent => {
    if (eaterySelectEvent.detail.eatery !== "0") {
        eateriesContainer.innerHTML = `
        ${eaterySelectEvent.detail.eatery}
        ${eateriesDetailsButton()}`
    }
})
