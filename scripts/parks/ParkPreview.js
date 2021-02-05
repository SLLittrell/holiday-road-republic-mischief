import { parksDetailsButton } from "../DetailsButton.js"
import { useParks } from "./ParkProvider.js"
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".parkName")
const dialogContainer = document.querySelector(".parkDialogBox")

let parkName = ""

eventHub.addEventListener("parkChosen", e => {
  contentTarget.innerHTML = `
    ${e.detail.parkName}
    ${parksDetailsButton()}
    `
  parkName = e.detail.parkName
  
})

eventHub.addEventListener('DetailsClickedEvent', e => {
    if (e.detail.id === 'parksDetail') {
        const parksArray = useParks().data
        const parksObject = parksArray.find(parksObject => parksObject.fullName === parkName)
        dialogContainer.innerHTML += `
        <dialog class="parksDialog" open>${parksObject.description}<br> Located in ${parksObject.states}<br>
        <button id="parksCloseButton">Close</button>
        </dialog>
        `
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "parksCloseButton") {
        dialogContainer.innerHTML = ``
    }})