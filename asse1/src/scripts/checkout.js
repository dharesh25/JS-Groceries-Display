document.addEventListener('DOMContentLoaded', () =>{
    const placeOrderButton = document.getElementById('place-order');
    const orderMessageElement = document.getElementById('order-message')

    placeOrderButton.addEventListener('click', ()=>{
        orderMessageElement.textContent = 'Your order is successfully placed.'

        localStorage.removeItem(item);

        const itemCountElement = window.opener.document.getElementById(item_Count);
        itemCountElement.textContent = '0';
    })
})