import { parksDetailsButton } from "../DetailsButton.js"
import { useParks } from "./ParkProvider.js"
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".parkName")
const dialogContainer = document.querySelector(".parkDialogBox")

let parkName = ""

eventHub.addEventListener("parkChosen", e => {
  contentTarget.innerHTML = `
    ${e.detail.parkName}<br>
    ${parksDetailsButton()}
    `
  parkName = e.detail.parkName
  
})

eventHub.addEventListener('DetailsClickedEvent', e => {
    if (e.detail.id === 'parksDetail') {
        const parksArray = useParks().data
        const parksObject = parksArray.find(parksObject => parksObject.fullName === parkName)
        const parkImage = parksObject.images.find(imageObj => imageObj.credit === "NPS Photo")
        dialogContainer.innerHTML += `
        <dialog class="parksDialog" open><img class="parkImages" src="${parkImage.url}"><br>${parksObject.description}<br> Located in ${parksObject.states}<br>
        <div class="npsLink">For more information visit: <a href="${parksObject.url}">${parksObject.url}</a></div>
        <button id="parksCloseButton">Close</button>
        </dialog>
        `
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "parksCloseButton") {
        dialogContainer.innerHTML = ``
    }})