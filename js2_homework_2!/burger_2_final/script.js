class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }
    addTopping(topping) {    // Добавить добавку 
        switch (topping) {
            case 'spices':
                this.spices = 'spices';
                break;
            case 'mayo':
                this.mayo = 'mayo';
                break;
            default:
                console.log('You can add only spices or mayo')
        }

    }
    removeTopping(topping) { // Убрать добавку 
        switch (topping) {
            case 'spices':
                delete this.spices;
                break;
            case 'mayo':
                delete this.mayo;
                break;

        }
    }
    getToppings() {   // Получить список добавок 
        let toppingList = ''
        if (this.spices == 'spices') { toppingList += ' spices' }
        if (this.mayo == 'mayo') { toppingList += ' mayo' }
        console.log('Toppings:' + toppingList)

    }
    getSize() {              // Узнать размер гамбургера 
        console.log('Size: ' + this.size)
    }
    getStuffing() {          // Узнать начинку гамбургера 
        console.log('Size: ' + this.stuffing)
    }
    calculatePrice() {       // Узнать цену 
        this.price = 0;
        if (this.size == 'small') { this.price += 50 }
        if (this.size == 'big') { this.price += 100 }
        if (this.stuffing == 'cheese') { this.price += 10 }
        if (this.stuffing == 'salad') { this.price += 20 }
        if (this.stuffing == 'potato') { this.price += 15 }
        if (this.spices == 'spices') { this.price += 15 }
        if (this.mayo == 'mayo') { this.price += 20 }
        console.log('Price: ' + this.price)

    }
    calculateCalories() {    // Узнать калорийность 
        this.calories = 0;
        if (this.size == 'small') { this.calories += 20 }
        if (this.size == 'big') { this.calories += 40 }
        if (this.stuffing == 'cheese') { this.calories += 20 }
        if (this.stuffing == 'salad') { this.calories += 5 }
        if (this.stuffing == 'potato') { this.calories += 10 }
        if (this.spices == 'spices') { this.calories += 0 }
        if (this.mayo == 'mayo') { this.calories += 5 }
        console.log('Calories: ' + this.calories)
    }
}

//size big, small
//stuffing chees, salad, potato
//topping spices, mayo
hamburger = new Hamburger('small', 'cheese');
hamburger.addTopping('spices');
hamburger.addTopping('mayo');
//два случая для получения сообщения что такого топпинга нет
hamburger.addTopping();
hamburger.addTopping('fgsd');

hamburger.removeTopping('spices');
hamburger.getToppings();
hamburger.getSize();
hamburger.getStuffing();
hamburger.calculatePrice();
hamburger.calculateCalories();
// delete hamburger.size;
// delete hamburger.size;