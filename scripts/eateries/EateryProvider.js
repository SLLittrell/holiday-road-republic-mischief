let eateries = []

// function that makes a copy of the array
export const useEateries = () => eateries.slice()

// function that fetches the data from the API and then parses the json file so js can read it
export const getEateries = () => {
    return fetch('http://holidayroad.nss.team/eateries')
    .then(response => response.json())
    .then(parsedResponse => eateries = parsedResponse)
}