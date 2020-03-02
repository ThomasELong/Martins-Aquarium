
const Tips = (tip) => {
    return `
            <header>
                <h3>Martin's Tips</h3>
            </header>
            <ul class="tips">
                <li>${tip.number}</li>
                <li>${tip.detail}</li>
            </ul>
    `
}

export default Tips