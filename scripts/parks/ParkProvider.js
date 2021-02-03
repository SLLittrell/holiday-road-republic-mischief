import { settings } from "../Settings.js"

let parkCollection = []

export const useParks = () => parkCollection

export const getParks = () => {
  return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then(parsedParks => {
      parkCollection = parsedParks
    })
}
