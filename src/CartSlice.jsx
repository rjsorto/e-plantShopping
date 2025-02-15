import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [], // Initialize items as an empty array
		qty: 0,
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

			state.qty += 1;
		},

		removeItem: (state, action) => {
			const { name, quantity } = action.payload;
			state.items = state.items.filter((item) => item.name !== name);
			if (state.qty) state.qty -= quantity;
		},

		updateQuantity: (state, action) => {
			const { name, quantity } = action.payload;
			const found = state.items.find((item) => item.name === name);
			if (found) {
				const val = quantity - found.quantity;
				found.quantity = quantity;
				state.qty += val;
			}
		},
	},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
