document.addEventListener('DOMContentLoaded', () => {
    const cartTotalElement = document.getElementById('cart_total')
    const cartElement = document.getElementById('cart');
    const checkoutButton = document.getElementById('checkout');

    displayCart();


    function displayCart(){
        cartElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = item.name;

            const removeButton = document.cartElement('button');
            removeButton.className = 'remove';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeItem(item));


            cartItem.appendChild(removeButton);
            cartElement.appendChild(cartItem)

            total += item.price || 0;
        })

        cartTotalElement.textContent = 'Cart Total: $${total.toFixed(2)}';
    }

    function removeItem(item){
        const itemIndex = cart.findIndex(cartItem => cartItem === item);
        if(itemIndex !== -1){
            cart.splice (itemIndex, 1)
            updateCart();
        }
    } 

    function updateCart(){
        localStorage.setItem('item', JSON.stringify(cart));
        displayCart();
    }

    checkoutButton.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    })


})