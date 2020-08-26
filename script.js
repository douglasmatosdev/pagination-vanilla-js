function generateList() {
    const data = Array.from({ length: 100 })
        .map((_, i) => `<div class="item">Item ${(i + 1)}</div>`)

        const list = document.querySelector('#pagination .list')
        list.innerHTML = data.join("")
}

generateList()