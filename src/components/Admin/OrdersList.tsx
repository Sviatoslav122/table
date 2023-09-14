import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Order {
    id: number;
    // Додайте інші властивості замовлення
}

const OrdersList: React.FC = () => {
    const role = useSelector((state: RootState) => state.auth.role);
    const [orders, setOrders] = useState<Order[]>([]);

    // Симуляція отримання списку замовлень з сервера
    useEffect(() => {
        if (role === 'admin') {
            // Ваш запит до сервера або логіка отримання замовлень
            const fakeOrders: Order[] = [
                { id: 1, /* Додайте інші властивості замовлення */ },
                { id: 2, /* Додайте інші властивості замовлення */ },
                // Додайте інші замовлення
            ];
            setOrders(fakeOrders);
        }
    }, [role]);

    // Перевірка чи користувач має роль адміністратора
    if (role !== 'admin') {
        return <div>Access denied. You are not an administrator.</div>;
    }

    return (
        <div>
            <h2>Orders List</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {/* Виводимо інформацію про замовлення */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersList;

