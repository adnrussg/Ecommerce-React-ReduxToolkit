import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartitems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartitems.push({ ...action.payload, quantity: 1});
            }
        },
        removeItemFromCart(state, action) {
            state.cartitems = state.cartitems.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cartitems = [];
        },
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartitems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartitems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        },
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;

const initialState = {
    cartitems: [],
};