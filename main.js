const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeshopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector(".body");
const quantity = document.querySelector(".quantity");



openShopping.addEventListener("click", () => {
    body.classList.add("active")
})
closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})


let products = [

    {
        id: 1,
        name:"PRODUCT 1",
        images:"images/headphone.jpg",
        price: 2000

    },
    {
        id: 2,
        name:"PRODUCT 2",
        images:"images/hublot.jpeg",
        price: 2000

    },
    {
        id: 3,
        name:"PRODUCT 3",
        images:"images/flip.jpeg",
        price: 2000

    },
    {
        id: 4,
        name:"PRODUCT 4",
        images:"images/glasses.jpeg",
        price: 2000

    },
    {
        id: 5,
        name:"PRODUCT 5",
        images:"images/1.png.jpeg",
        price: 2000

    },
    {
        id: 6,
        name:"PRODUCT 6",
        images:"images/cart.jpeg",
        price: 2000

    },
]

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.images}">
            <div class = "title">${value.name}</div>
            <div class = "price">${value.price.toLocaleString()}</div>
            <button onclick = "addtoCard(${key})"Add to Card</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp()

const addtoCard = (key) => {
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }

    reloadCard();
}
const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src = "img/${value.images}"></div>
            <div class = "cardTitle">${value.name}</div>
            <div class = "cardPrice">${value.price.toLocaleString()}</div>

            <div>
                <button style= "background-color: blue"
                class= "cardButton" onclick = "changeQuantity (${key}) vlaue ="${value.quantity - 1}">-</button>

                <button style= "background-color: blue"
                class= "cardButton" onclick = "changeQuantity (${key}) vlaue ="${value.quantity + 1}">+</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}