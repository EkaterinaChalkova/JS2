const vue = new Vue({
    el: '#app',
    data: {
        name: 'Admin',
        searchLine: '',
        cartVisibility: false,
        list: [],
        filteredList: [],
        cart: [],
        newTitle: '',
        newPrice: 0,
        rectangle: { x: 10, y: 15 }
    },
    computed: {
        square() {
            return this.rectangle.x * this.rectangle.y
        }
    },



    methods: {
        FilterGoods() {
            const regex = new RegExp(this.searchLine, 'i')
            this.filteredList = this.list.filter(el => regex.test(el.title))

        },
        changeName() {
            this.name = 'John'
        },
        changeCartVisibility() {
            this.cartVisibility = !this.cartVisibility
        },

        add() {
            this.cart.push({ title: this.newTitle, price: this.newPrice });
            this.newPrice = 0;
            this.newTitle = '';
        },
        addToCart(event) {

            console.log(event.target.id)
            let cartItem = this.cart.filter(el => el.title == event.target.id)[0]
            let goodItem = this.list.filter(el => el.title == event.target.id)[0]

            if (cartItem != undefined) {
                this.cart.filter(el => el.title == event.target.id)[0].amount += 1;
                this.cart.filter(el => el.title == event.target.id)[0].price += goodItem.price;
            } else {
                this.cart.push({ title: goodItem.title, price: goodItem.price, amount: 1 });
            }
        }
    },
    mounted() {
        fetch('/catalogData.json')
            .then((response) => response.json())
            .then((data) => {
                this.list = data
                this.filteredList = data
            })
    }
});