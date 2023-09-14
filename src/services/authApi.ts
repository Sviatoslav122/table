// Модуль для взаємодії з API авторизації

// Функція для авторизації користувача
export const authenticateUser = async (email: string, password: string): Promise<string> => {
    try {
        // Виконайте запит до API для авторизації
        // Передайте email та password як дані запиту

        // Приклад запиту до API з використанням fetch:
        const response = await fetch('bigbird.space/api/v1/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            // Обробка помилок API
            throw new Error('Authentication failed');
        }

        // Отримайте дані про користувача і поверніть їх
        const data = await response.json();

        return data.role; // Припустимо, що API повертає роль користувача
    } catch (error) {
        throw error; // Викидаємо помилку, якщо щось пішло не так
    }
};
