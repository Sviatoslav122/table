import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchOrders } from '../../store/slices/ordersSlice';

const OrdersList: React.FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.orders.orders);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div>
            <h2>Список замовлень</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>{order.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersList;
