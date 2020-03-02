const initializeDetailButtonEvents = () => {

    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }



// Get a reference to all buttons that start with "button--"
const allDetailButtons = document.querySelectorAll("button[id^='button--']")

// Add an event listener to each one
for (const btn of allDetailButtons) {
    btn.addEventListener(
        "click",
        theEvent => {
            const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
        }
    )
}
}

//     document.querySelector("#button--betty").addEventListener(
//         "click",
//         theClickEvent => {
//             const theDialog = document.querySelector("#details--betty")
//             theDialog.showModal()
//         }
//     )
// // Show Lucy's details when the button is clicked
//     document.querySelector("#button--nemo").addEventListener(
//         "click",
//         theClickEvent => {
//             const theDialog = document.querySelector("#details--nemo")
//             theDialog.showModal()
//         }
//     )
//     // Show Betty's details when the button is clicked
//     document.querySelector("#button--dory").addEventListener(
//         "click",
//         theClickEvent => {
//             const theDialog = document.querySelector("#details--dory")
//             theDialog.showModal()
//         }
//     )

//     // Show Nemo's details when the button is clicked
//     document.querySelector("#button--harold").addEventListener(
//         "click",
//         theClickEvent => {
//             const theDialog = document.querySelector("#details--harold")
//             theDialog.showModal()
//         }
//     )

//     // Show Dory's details when the button is clicked
//     document.querySelector("#button--patricia").addEventListener(
//         "click",
//         theClickEvent => {
//             const theDialog = document.querySelector("#details--patricia")
//             theDialog.showModal()
//         }
//     )
//      // Show Jeff's details when the button is clicked
//      document.querySelector("#button--mike").addEventListener(
//         "click",
//         theClickEvent => {
//             const theDialog = document.querySelector("#details--mike")
//             theDialog.showModal()
//         }
//      )    
// }


export default initializeDetailButtonEvents