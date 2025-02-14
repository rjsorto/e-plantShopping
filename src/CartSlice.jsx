import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [], // Initialize items as an empty array
	},
	reducers: {
		addItem: (state, action) => {
			const { name, image, cost } = action.payload;
			const itemExists = state.items.find((item) => item.name === name);
			if (itemExists) {
				itemExists.quantity++;
			} else {
				state.items.push({ name, image, cost, quantity: 1 });
			}
		},
		removeItem: (state, action) => {
			state.items = state.items.filter((item) => item.name !== action.payload);
		},
		updateQuantity: (state, action) => {
			const { name, quantity } = action.payload;
			const found = state.items.find((item) => item.name === name);
			if (found) found.quantity = quantity;
		},
	},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
