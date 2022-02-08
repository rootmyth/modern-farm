export const catalog = (itemsToSell) => {
    let innerHTML = `<section class="container">`
    for (const item of itemsToSell) {
        innerHTML += `
        <section class="plant">${item.type}</section>
        `
    }
    innerHTML += `</section>`
    return innerHTML
}