import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../services/authApi';

const Register: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleRegister = async () => {
        try {
            const user = await dispatch(registerUser(email, password));
            // Додайте логіку для успішної реєстрації
        } catch (error) {
            console.error('Помилка реєстрації', error);
            // Додайте логіку для відображення помилки реєстрації
        }
    };

    return (
        <div>
            <h2>Register Page</h2>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
