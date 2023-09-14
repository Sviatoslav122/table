// src/components/Shared/OrderDetail.tsx

import React from 'react';
import { Order } from '../../types/Order';

interface OrderDetailProps {
    order: Order;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ order }) => {
    return (
        <div className="order-detail">
            <h3>Order Details</h3>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Customer Name:</strong> {order.customerName}</p>
            <p><strong>Product:</strong> {order.product}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Price:</strong> ${order.price}</p>
        </div>
    );
};

export default OrderDetail;
