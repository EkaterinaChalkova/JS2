Vue.component('cart-component', {
    props: ['cartlist', 'viscart', 'close'],
    template: `<div class="container " v-if="viscart"  >
        <div class="cart_contant"> 
   
            <div class="good-cart" v-for ="item in cartlist" >
                <img class="cart_img" v-bind:src="item.img" alt="">
                <div class="good-cart-title">{{item.title}}</div>
                <div class="good-cart-amount">Amount: {{item.amount}}</div>
                <div class="good-cart-price">Total price: {{item.price}}</div>
                <button class="buy_btn_style" v-bind:id=item.title v-on:click="searchEmit('one')">
                        Удалить 1 товар
                </button>
                <button class="buy_btn_style" v-bind:id=item.title v-on:click="searchEmit('all')">
                        Удалить все
                </button>
            </div>
        <button class="close" v-on:click="close">X</button>
        </div>    
    </div>`,
    methods: {
        searchEmit(btn_type) {
            // console.log(this.cartlist)
            console.log(event.target.id)
            console.log(btn_type)
            // console.log(this.item.amount)
            this.$emit('deletecart', [event.target.id, btn_type])
        }
    }
});