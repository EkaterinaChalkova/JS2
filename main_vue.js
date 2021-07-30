const vue = new Vue({
    el: '#app',
    data: {
        cartVisibility: false,
        list: [],
        filteredList: [],
        cart: [],
        testProp: "test123",


    },

    methods: {
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