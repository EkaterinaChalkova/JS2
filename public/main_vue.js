const vue = new Vue({
    el: '#app',
    data: {
        cartVisibility: false,
        list: [],
        filteredList: [],
        cart: [],

    },

    methods: {
        deleteFromCart(e) {
            if (e[1] == 'one') {

                if (this.cart.filter(el => el.title == e[0])[0].amount > 1) {
                    console.log('one')
                    this.cart.filter(el => el.title == e[0])[0].amount -= 1;
                    this.cart.filter(el => el.title == e[0])[0].price -= this.list.filter(el => el.title == e[0])[0].price;
                } else {
                    this.cart = this.cart.filter(el => el.title != e[0]);
                }

            }
            if (e[1] == 'all') {
                console.log('all')
                this.cart = this.cart.filter(el => el.title != e[0]);
            }
            fetch('/cart', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.cart)
            })
        },
        FilterGoods(e) {
            const regex = new RegExp(e, 'i')
            this.filteredList = this.list.filter(el => regex.test(el.title))

        },
        changeCartVisibility() {
            this.cartVisibility = !this.cartVisibility
        },

        addToCart(event) {

            console.log(event.target.id)
            let cartItem = this.cart.filter(el => el.title == event.target.id)[0]
            let goodItem = this.list.filter(el => el.title == event.target.id)[0]

            if (cartItem != undefined) {
                this.cart.filter(el => el.title == event.target.id)[0].amount += 1;
                this.cart.filter(el => el.title == event.target.id)[0].price += goodItem.price;
            } else {
                this.cart.push({ img: goodItem.img, title: goodItem.title, price: goodItem.price, amount: 1 });
            }
            fetch('/cart', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.cart)
            })
        }
    },

    mounted() {
        fetch('/catalog')
            .then((response) => response.json())
            .then((data) => {
                this.list = data
                this.filteredList = data
            })
        fetch('/cart')
            .then((response) => response.json())
            .then((data) => {
                this.cart = data
            })
    }
});