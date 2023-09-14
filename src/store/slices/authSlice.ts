// src/store/slices/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    role: string | null;
    // Додайте інші властивості потрібні для авторизації
}

const initialState: AuthState = {
    isAuthenticated: false,
    role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            // Додайте логіку для обробки авторизації
        },
        logout(state) {
            // Додайте логіку для виходу з системи
        },
        // Додайте інші reducers та actions, які потрібні для авторизації
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
