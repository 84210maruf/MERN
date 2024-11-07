import React, { useEffect, useState } from 'react';

function OrdersTable() {
    const [orders, setOrders] = useState([]);

    // Fetch orders on component mount
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            const response = await fetch(`/api/orders/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            if (response.ok) {
                alert('Order status updated successfully');
                fetchOrders(); // Refresh the orders list
            } else {
                console.error('Failed to update order status');
            }
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const deleteOrder = async (orderId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this order?");
        if (confirmDelete) {
            try {
                const response = await fetch(`/api/orders/${orderId}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    alert('Order deleted successfully');
                    fetchOrders(); // Refresh the orders list
                } else {
                    console.error('Failed to delete order');
                }
            } catch (error) {
                console.error('Error deleting order:', error);
            }
        }
    };

    return (
        <div>
            {/* <h2 className="text-xl font-semibold mt-4">Orders</h2> */}
            <table className="min-w-full border-collapse border border-gray-200 mt-3">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Order ID</th>
                        <th className="border border-gray-300 p-2">User Info</th>
                        <th className="border border-gray-300 p-2">Phone No.</th>
                        <th className="border border-gray-300 p-2">Product Details</th>
                        <th className="border border-gray-300 p-2">Shipping Cost</th>
                        <th className="border border-gray-300 p-2">Total Price</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Date</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="bg-white border-b">
                            <td className="border border-gray-300 p-2">{order._id}</td>
                            <td className="border border-gray-300 p-2">
                                <p>Name: {order.user.name}</p>
                                <p>Email: {order.user.email}</p>
                            </td>
                            <td className="border border-gray-300 p-2">
                                {order.basket.length > 0 ? (
                                    <table className="min-w-full border border-gray-200">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 p-1">Title</th>
                                                <th className="border border-gray-300 p-1">Quantity</th>
                                                <th className="border border-gray-300 p-1">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.basket.map((item, index) => (
                                                <tr key={index} className="bg-gray-100">
                                                    <td className="border border-gray-300 p-1">{item.title}</td>
                                                    <td className="border border-gray-300 p-1">{item.quantity}</td>
                                                    <td className="border border-gray-300 p-1">{item.price} Tk</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No items</p>
                                )}
                            </td>
                            <td className="border border-gray-300 p-2">{order.shippingCost}</td>
                            <td className="border border-gray-300 p-2">{order.total}</td>
                            <td className="border border-gray-300 p-2">{order.phone}</td>
                            <td className="border border-gray-300 p-2">{order.status}</td>
                            <td className="border border-gray-300 p-2">{new Date(order.orderDate).toLocaleDateString()}</td>
                            <td className="border border-gray-300 p-2 flex flex-wrap justify-around">
                                <button
                                    onClick={() => updateOrderStatus(order._id, 'Completed')}
                                    className="bg-green-500 text-white px-2 py-1 rounded mr-1"
                                >
                                    Mark as Completed
                                </button>
                                <button
                                    onClick={() => deleteOrder(order._id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrdersTable;
