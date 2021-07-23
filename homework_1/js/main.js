const products = [
    {id: 1, title: 'Notebook', price: "2032 $", img: "https://picsum.photos/300/150"},
    {id: 2, title: 'Mouse', price: "20 $", img: "https://picsum.photos/300/150"},
    {id: 3, title: 'Keyboard', price: "120 $", img: "https://picsum.photos/300/150"},
    {id: 4, title: 'Gamepad', price: "220 $", img: "https://picsum.photos/300/150"},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <img src="${item.img}" alt="product">
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);