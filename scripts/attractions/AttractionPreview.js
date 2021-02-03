import { getAttractions, useAttractions } from "./AttractionProvider.js"

// Listens for attractionSelected event and runs the render preview function if the selected item matches the attraction chosen
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".attractionContainer")

eventHub.addEventListener("attractionSelected", event => {
    getAttractions()
        .then(() => {
            const attractionArray = useAttractions()
            const attractionObj = attractionArray.find(attractionObj => attractionObj.name === event.detail.chosenAttraction)

            contentTarget.innerHTML =  `
                ${attractionObj.name}
            `
        })
})