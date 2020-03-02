import { useFish } from "./FishDataProvider.js"
import  Fish  from "./Fish.js"

export const FishList = () => {
    const contentTarget = document.querySelector(".fishList")

    // Get the data from the provider
    const fishObjectsArray = useFish()

    // Iterate the array
    for (const fishObject of fishObjectsArray) {

    // Convert each object to HTML representation
    const fishHTMLRepresentation = Fish(fishObject)
    
    // Put HTML in DOM
    contentTarget.innerHTML += fishHTMLRepresentation
}
   
}

