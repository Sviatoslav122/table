// src/components/Admin/Dashboard.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchOrders } from '../../store/slices/ordersSlice';
import OrdersList from './OrdersList';
import OrderDetail from '../Shared/OrderDetail';

const AdminDashboard: React.FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.orders.orders);
    const selectedOrder = useSelector((state: RootState) => state.orders.selectedOrder);

    useEffect(() => {
        // Отримати список замовлень під час завантаження сторінки
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <OrdersList orders={orders} />
            {selectedOrder && <OrderDetail order={selectedOrder} />}
        </div>
    );
};

export default AdminDashboard;
