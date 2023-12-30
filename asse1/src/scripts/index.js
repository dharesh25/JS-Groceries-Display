// The items should be stored in local storage with key :- “items”
const apiLink = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries'
let groceryList = []
let cart = JSON.parse(localStorage.getItem('items')) || [];


fetch(apiLink)
.then(response => response.json())
.then(data => {
    groceryList = data;
    displayGroceryList();
})
.catch(error => {
    console.error('Error fetaching data', error)
});

function displayGroceryList(){
    const itemsElement = document.getElementById('items');
    itemsElement.innerHTML = '';

    groceryList.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item';
        itemCard.textContent = item.name;

        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'add_to_cart';
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => addToCartButton(item))

        itemCard.appendChild(addToCartButton);
        itemsElement.appendChild(itemCard)
    })
}

function addToCart(item){
    cart.push(item);
    updateCart();
}

function updateCart(){
    const itemCountElement = document.getElementById('item_count');
    itemCountElement.textContent = cart.length;
    localStorage.setItem('items', JSON.stringify(cart))
}