import { getEateries, useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('.dropdown__eateries')

// dispacthing dropdown change event
eventHub.addEventListener("change", event => {
    if (event.target.id === 'eaterySelect') {
        const customEvent = new CustomEvent('eaterySelect', {
            detail: {
                eatery: event.target.value
            }
        })
        console.log(customEvent)
        eventHub.dispatchEvent(customEvent)
    }
})

// getting the eateries array and calling the render function with the array as a parameter
export const eaterySelect = () => {
    getEateries()
    .then(() => {
        const eateries = useEateries()
        render(eateries)
    })
}
// function that iterates through the eateries array and renders specific data using string interpolation
const render = eateriesCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${eateriesCollection.map(eateriesObject => `<option value="${eateriesObject.businessName}">${eateriesObject.businessName}</option>`).join("")
        }
        </select>
    `
}