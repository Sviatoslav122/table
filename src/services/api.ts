// authApi.ts
export const authenticateUser = async (email: string, password: string) => {
    try {
        const response = await fetch('/api/v1/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const user = await response.json();
            return user;
        } else {
            throw new Error('Помилка авторизації');
        }
    } catch (error) {
        console.error('Помилка авторизації', error);
        throw error;
    }
};
