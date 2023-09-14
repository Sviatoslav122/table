// src/components/Admin/CreateManager.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createManager } from '../../store/slices/managersSlice';

const CreateManager: React.FC = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleCreateManager = () => {
        // Передати дані нового менеджера до Redux для створення
        dispatch(createManager({ name }));
        setName(''); // Очистити поле для імені після створення
    };

    return (
        <div>
            <h1>Create Manager</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleCreateManager}>Create</button>
        </div>
    );
};

export default CreateManager;
