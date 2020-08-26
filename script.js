function generateList() {
    const data = Array.from({ length: 100 })
        .map((_, i) => `<div class="item">Item ${(i + 1)}</div>`)

        const list = document.querySelector('#pagination .list')
        list.innerHTML = data.join("")
    
        return data
}
const data = generateList()
let perPage = 5

const state = {
    page: 1,
    perPage,
    totalPages: Math.ceil(data.length / perPage)
}

console.log(state.totalPages)

const controls = {
    next() {
        state.page++

        const lastPage = state.page > state.totalPages
        if(lastPage) {
            state.page--
        }
    },
    prev() {
        state.page--

        if(state.page < 1) {
            state.page++
        }
    },
    goTo() {}
}