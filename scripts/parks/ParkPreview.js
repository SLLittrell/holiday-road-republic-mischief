import { parksDetailsButton } from "../DetailsButton.js"
import { useParks } from "./ParkProvider.js"
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".parkName")
const dialogContainer = document.querySelector(".parkDialogBox")

let parkName = ""

//listens for park to be chosen in dropdown and displays it in preview along with details button
eventHub.addEventListener("parkChosen", e => {
  contentTarget.innerHTML = `
    ${e.detail.parkName}<br>
    ${parksDetailsButton()}
    `
  parkName = e.detail.parkName
  
})

//when details button is clicked, park information is shown
eventHub.addEventListener('DetailsClickedEvent', e => {
    if (e.detail.id === 'parksDetail') {
        const parksArray = useParks().data
        const parksObject = parksArray.find(parksObject => parksObject.fullName === parkName)
        //Gets first image from NPS api and will render in details componant
        const parkImage = parksObject.images.find(imageObj => imageObj.credit.includes("NPS"))
        dialogContainer.innerHTML += `
        <dialog class="parksDialog" open><img class="parkImages" src="${parkImage.url}"><br>${parksObject.description}<br> Located in ${parksObject.states}<br>
        <div class="npsLink">For more information visit: <a href="${parksObject.url}">${parksObject.url}</a></div>
        <button id="parksCloseButton">Close</button>
        </dialog>
        `
    }
})

//close button for dialog box
eventHub.addEventListener("click", event => {
    if (event.target.id === "parksCloseButton") {
        dialogContainer.innerHTML = ``
    }})