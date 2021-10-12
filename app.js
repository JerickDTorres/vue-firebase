const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'http://www.google.com',
            showBooks: true,
            books: [
                {title: "Intelligent Investor",author: "Benjamin Graham", img:'assets/1.jpg', isFav: true},
                {title: "Common Stocks and Uncommon Profits",author: "Philip Fisher", img:'assets/2.jpg', isFav: false},
                {title: "Limitless",author: "Bo Sanchez", img:'assets/3.jpg', isFav: true}
            ],
            x: 0,
            y: 0
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            console.log(book.isFav)
            book.isFav = !book.isFav
        },

        handleEvent(e, data) { //if events, event object
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },

    },

    computed: { //dependent on data, if data changes will trigger computed
        filteredBooks() {
            return this.books.filter((book)=> book.isFav)
        }
    }

});

app.mount('#app')