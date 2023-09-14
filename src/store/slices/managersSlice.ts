// src/store/slices/managersSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Manager } from '../../types/Manager';

interface ManagersState {
    managers: Manager[];
    // Додайте інші властивості, які потрібні для управління списком менеджерів
}

const initialState: ManagersState = {
    managers: [],
};

const managersSlice = createSlice({
    name: 'managers',
    initialState,
    reducers: {
        addManager(state, action: PayloadAction<Manager>) {
            // Додайте логіку для додавання менеджера
        },
        // Додайте інші reducers та actions, які потрібні для управління менеджерами
    },
});

export const { addManager } = managersSlice.actions;
export default managersSlice.reducer;
