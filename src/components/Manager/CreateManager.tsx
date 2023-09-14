// src/components/Admin/CreateManager.tsx

import React, { useState } from 'react';

const CreateManager: React.FC = () => {
    const [managerData, setManagerData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setManagerData({
            ...managerData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Відправити дані на сервер або зберегти їх в Redux для подальшої обробки
        console.log('Новий менеджер:', managerData);
        // Очистити форму
        setManagerData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className="create-manager">
            <h2>Create Manager</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={managerData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={managerData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={managerData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={managerData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Manager</button>
            </form>
        </div>
    );
};

export default CreateManager;
