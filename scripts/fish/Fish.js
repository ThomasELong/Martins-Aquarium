/**
 *  Fish which renders individual fish objects as HTML
 * ---Converts the object to HTML---
 */
const Fish = (fish) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
            <button id="button--${fish.name}">Details</button>
                <dialog class="dialog--fish dialogDetails" id="details--${fish.name}">
                    <div class="dialog--Details">Species: ${fish.species}</div>
                    <div class="dialog--Details">Location: ${fish.location}</div>
                    <div class="dialog--Details">Length: ${fish.size}</div>
                    <div class="dialog--Details">Food: ${fish.food.join(",")}</div>

                    <button class="button--close">Close Dialog</button>
                </dialog>

        </div>
    `
}

export default Fish
