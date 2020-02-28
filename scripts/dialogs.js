const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END

    document.querySelector("#button--Betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Betty")
            theDialog.showModal()
        }
    )
// Show Lucy's details when the button is clicked
    document.querySelector("#button--Nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Nemo")
            theDialog.showModal()
        }
    )
    // Show Betty's details when the button is clicked
    document.querySelector("#button--Dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Dory")
            theDialog.showModal()
        }
    )

    // Show Nemo's details when the button is clicked
    document.querySelector("#button--Harold").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Harold")
            theDialog.showModal()
        }
    )

    // Show Dory's details when the button is clicked
    document.querySelector("#button--Patricia").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Patricia")
            theDialog.showModal()
        }
    )
     // Show Jeff's details when the button is clicked
     document.querySelector("#button--Mike").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Mike")
            theDialog.showModal()
        }
     )
     // Show Keke's details when the button is clicked
     document.querySelector("#button--Keke").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Keke")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents