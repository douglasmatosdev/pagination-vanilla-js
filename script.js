const data = Array.from({ length: 100 })
    .map((_, i) => `Item ${(i + 1)}`)

// function generateList() {
//     const data = Array.from({ length: 100 })
//         .map((_, i) => `<div class="item">Item ${(i + 1)}</div>`)

//         const list = document.querySelector('#pagination .list')
//         list.innerHTML = data.join("")
    
//         return data
// }

const html = {
    get(element) {
        return document.querySelector(element)
    }
}

let perPage = 5
const state = {
    page: 1,
    perPage,
    totalPages: Math.ceil(data.length / perPage)
}

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
    goTo(page) {
        if (page < 1) {
            page = 1
        }

        state.page = page

        if(page > state.totalPages) {
            state.page = state.totalPages
        }

    },
    createListeners() {
        html.get('.first').addEventListener('click', () => {
            controls.goTo(1)
            update()
        })

        html.get('.last').addEventListener('click', () => {
            controls.goTo(state.totalPages)
            update()
        })

        html.get('.next').addEventListener('click', () => {
            controls.next()
            update()
        })

        html.get('.prev').addEventListener('click', () => {
            controls.prev()
            update()
        })
    }
}

const list = {
    create(item) {
        console.log(item)

        const div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML = item
        html.get('.list').appendChild(div)
    },
    update() {
        html.get('.list').innerHTML = ""

        let page = state.page - 1
        let start = page * state.perPage
        let end = start + state.perPage

        const paginateItems = data.slice(start, end)

        paginateItems.forEach(list.create)
    }
}

function update() {
    list.update()
    console.log(state.page)
}
function init() {
    list.update()
    controls.createListeners()
}

init()
