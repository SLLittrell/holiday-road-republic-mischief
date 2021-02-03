const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".parkName")

eventHub.addEventListener("parkChosen", e => {
  contentTarget.innerHTML = `${e.detail.parkName}`
})