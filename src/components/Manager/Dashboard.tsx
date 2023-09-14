// src/components/Manager/Dashboard.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ManagerDashboard: React.FC = () => {
    const role = useSelector((state: RootState) => state.auth.role);

    // Перевірка чи користувач має роль менеджера
    if (role !== 'manager') {
        return <div>Доступ обмежено. Ви не є менеджером.</div>;
    }

    return (
        <div>
            <h1>Панель менеджера</h1>
            {/* Додайте тут функціональність для менеджера */}
        </div>
    );
};

export default ManagerDashboard;
