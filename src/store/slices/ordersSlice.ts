// src/store/slices/ordersSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/Order';

interface OrdersState {
    orders: Order[];
    // Додайте інші властивості, які потрібні для управління списком замовлень
}

const initialState: OrdersState = {
    orders: [],
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<Order>) {
            // Додайте логіку для додавання замовлення
        },
        // Додайте інші reducers та actions, які потрібні для управління замовленнями
    },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
