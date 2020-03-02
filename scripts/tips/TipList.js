import { useTips } from "./TipDataProvider.js"
import  Tip  from "./Tip.js"



export const TipList = () => {
    const contentTarget = document.querySelector(".tipList")

    const tipObjectsArray = useTips()

    for (const tipObject of tipObjectsArray) {
        const tipHTMLRepresentation = Tip(tipObject)
        contentTarget.innerHTML += tipHTMLRepresentation
    }
}
