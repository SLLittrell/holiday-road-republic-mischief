import { getEateries, useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('.dropdown__eateries')


eventHub.addEventListener("change", event => {
    if (event.target.id === 'eateries__select') {
        const selectedEatery = event.target.value
        const customEvent = new CustomEvent('eaterySelect', {
            detail: {
                eatery: selectedEatery
            }
        })
        console.log(customEvent)
        eventHub.dispatchEvent(customEvent)
    }
})


export const eaterySelect = () => {
    getEateries()
    .then(() => {
        const eateries = useEateries()
        render(eateries)
    })
}

const render = eateriesCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${eateriesCollection.map(eateriesObject => `<option value="${eateriesObject.businessName}">${eateriesObject.businessName}</option>`).join("")
        }
        </select>
    `
}