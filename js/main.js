const products = [
    { id: 1, title: 'Notebook', price: "2032 $", img: "https://picsum.photos/300/150" },
    { id: 2, title: 'Mouse', price: "20 $", img: "https://picsum.photos/300/150" },
    { id: 3, title: 'Keyboard', price: "120 $", img: "https://picsum.photos/300/150" },
    { id: 4, title: 'Gamepad', price: "220 $", img: "https://picsum.photos/300/150" },
];
//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <p class>${item.price}</p>
                <img src="${item.img}" alt="product">
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
};

renderPage(products);

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Notebook', price: 2032 },
            { title: 'Mouse', price: 20 },
            { title: 'Keyboard', price: 120 },
            { title: 'Gamepad', price: 220 },
        ];
    }

    totalGoodsList() {
        let totalPrice = document.getElementById('total-price');
        let sum = 0;
        this.goods.forEach(product => {
            sum += product.price
        });
        console.log("Sum: " + sum);
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalGoodsList();

class Cart {
    constructor() {
        this.goods = [];
    }
    //метод добавления товара в корзину
    addCartItem() {

    }

    //Метод для вывода итоговой суммы корзины
    totalCartPrice() {

    }
    //Метод для отображения корзины
    render() {

    }
}