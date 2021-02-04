import { getAttractions, useAttractions } from "./AttractionProvider.js"

const contentTarget = document.querySelector(".dropdown__bizarre")

// Function that, when called, will render a drowdown to the DOM containing the attraction names
const renderAttractionDropdown = (attractionArray) => {
    contentTarget.innerHTML = `
        <select id="bizarreSelect">
        <option value="">Please select an attraction</option>
        ${
            attractionArray.map(attractionObj => {
                return `<option value="${attractionObj.name}">${attractionObj.name}</option>`
            })
        }
        </select>
    `
}

// called in main JS to get list of attractions and call render function (above)
export const attractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractionArray = useAttractions()

            renderAttractionDropdown(attractionArray)
        })
}

// Sets eventHub and dispatches custom event when attraction dropdown is changed
const eventHub = document.querySelector("#container")

eventHub.addEventListener("change", event => {
    if (event.target.id === "bizarreSelect") {
        const customEvent = new CustomEvent("attractionSelected", {
            detail: {
                chosenAttraction: event.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)
    }    
})


