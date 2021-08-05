Vue.component('cart-component', {
    props: ['cartlist', 'viscart', 'close'],
    template: `<div class="container " v-if="viscart"  >
    <div class="cart_contant"> 
   
<div class="good-cart" v-for ="item in cartlist" >
<img class="cart_img" v-bind:src="item.img" alt="">
<div class="good-cart-title">{{item.title}}</div>
<div class="good-cart-amount">Amount: {{item.amount}}</div>
<div class="good-cart-price">Total price: {{item.price}}</div>

</div>
<button class="close" v-on:click="close">X</button>
    </div>    
    </div>`
});