class GoodsItem {
    constructor(title, text, price, img) {
        this.title = title;
        this.price = price;
        this.text = text;
        this.img = img;
    }
    render() {
        return `<div class="all_product_photo_product">
             <div class="goods-item">
             <a href="#">
            <img src="${this.img}"></a>
             <h3 class="product_name">${this.title}</h3>
             <p class="description">${this.text}</p>
             <p class="price">${this.price}</p>
             </div>
             <div class="mask">
             <a href="#">
             <img src="img/Forma_1_copy.png" alt=""></a></div></div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', img: 'img/product1.png' },
            { title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', img: 'img/product2.png' },
            { title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', img: 'img/product3.png' },
            { title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', img: 'img/product4.png' },
            { title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', img: 'img/product5.png' },
            { title: "ELLERY X M'O CAPSULE", text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', img: 'img/product6.png' },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.text, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

// класс корзины Cart
class Cart {
    constructor() {
        this.goods = [];
    }
    //метод добавления товара в корзину
    addCartItem(cartItem) {
        this.goods.push(cartItem);
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();