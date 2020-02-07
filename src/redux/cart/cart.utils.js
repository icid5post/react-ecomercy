export const addToCart = (cartItems, cartItemAdd) => {
    const cartItemExist = cartItems.find( item => item.id === cartItemAdd.id);
    if( cartItemExist ) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, {...cartItemAdd, quantity: 1}]
};