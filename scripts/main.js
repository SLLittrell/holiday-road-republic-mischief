import './eateries/EateriesPreview.js'
import "./attractions/AttractionPreview.js"
import "./parks/ParkPreview.js"
import "./SaveItineraries/savedItineraries.js"
import { displayItineraries } from "./SaveItineraries/savedItineraries.js"
import { eaterySelect } from "./eateries/EateriesSelect.js"
import { attractionSelect } from "./attractions/AttractionSelect.js"
import { parkDropdown } from "./parks/ParkSelect.js"
import { saveButton } from "./SaveItineraries/saveButton.js"
import {WeatherPreview} from "./weather/WeatherPreview.js"

eaterySelect()
attractionSelect()
eaterySelect()
attractionSelect()
parkDropdown()
saveButton()
displayItineraries()

