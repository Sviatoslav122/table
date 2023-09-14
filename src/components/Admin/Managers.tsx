// src/components/Admin/Managers.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchManagers, selectManager, deleteManager } from '../../store/slices/managersSlice';

const Managers: React.FC = () => {
    const dispatch = useDispatch();
    const managers = useSelector((state: RootState) => state.managers.managers);
    const selectedManager = useSelector((state: RootState) => state.managers.selectedManager);

    useEffect(() => {
        // Отримати список менеджерів під час завантаження сторінки
        dispatch(fetchManagers());
    }, [dispatch]);

    const handleSelectManager = (managerId: string) => {
        dispatch(selectManager(managerId));
    };

    const handleDeleteManager = (managerId: string) => {
        // Додайте функціональність для видалення менеджера
        // Можливо, ви хочете підтвердження перед видаленням
        dispatch(deleteManager(managerId));
    };

    return (
        <div>
            <h1>Managers</h1>
            <ul>
                {managers.map((manager) => (
                    <li key={manager.id}>
                        {manager.name}
                        <button onClick={() => handleSelectManager(manager.id)}>
                            Select
                        </button>
                        <button onClick={() => handleDeleteManager(manager.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            {selectedManager && (
                <div>
                    <h2>Selected Manager: {selectedManager.name}</h2>
                    {/* Додайте іншу інформацію про обраного менеджера */}
                </div>
            )}
        </div>
    );
};

export default Managers;
