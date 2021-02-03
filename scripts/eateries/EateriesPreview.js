import { getEateries, useEateries } from "./EateryProvider"

const eventHub = document.querySelector('#container')
const eateriesContainer = document.querySelector('.eateryContainer')

// export const eateryList = () => {
//     getEateries()
//     .then(() => {
//         const eateriesArray = useEateries()


//     })
// }

eventHub.addEventListener('eaterySelect', eaterySelectEvent => {
    if (eaterySelectEvent.detail.eatery !== "0") {
        // const eateriesArray = useEateries()
        // console.log('eateriesArray: ', eateriesArray);
    }
})



// export const eaterySelect = () => {
//     getEateries()
//     .then(() => {
//         const eateries = useEateries()
//         render(eateries)
//     })
// }

// const render = eateriesCollection => {
//     contentTarget.innerHTML = `
//         <select class="dropdown" id="eaterySelect">
//             <option value="0">Please select an eatery...</option>
//             ${eateriesCollection.map(eateriesObject => `<option value="${eateriesObject.businessName}">${eateriesObject.businessName}</option>`).join("")
//         }
//         </select>
//     `
// }