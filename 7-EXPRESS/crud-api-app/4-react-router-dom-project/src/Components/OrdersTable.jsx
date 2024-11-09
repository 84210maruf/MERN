// import React, { useEffect, useState } from 'react';

// function OrdersTable() {
//     const [orders, setOrders] = useState([]);
//     const [editingOrderId, setEditingOrderId] = useState(null);
//     const [updatedOrder, setUpdatedOrder] = useState({});

//     // Fetch orders on component mount
//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const response = await fetch('/api/orders');
//             const data = await response.json();
//             setOrders(data);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };

//     const handleEditClick = (order) => {
//         setEditingOrderId(order._id);
//         setUpdatedOrder(order); // Set initial state for the selected order
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedOrder((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleAddressChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedOrder((prev) => ({
//             ...prev,
//             address: {
//                 ...prev.address,
//                 [name]: value,
//             },
//         }));
//     };

//     const saveOrder = async () => {
//         try {
//             const response = await fetch(`/api/orders/${editingOrderId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedOrder),
//             });
//             if (response.ok) {
//                 alert('Order updated successfully');
//                 fetchOrders(); // Refresh orders
//                 setEditingOrderId(null); // Exit edit mode
//             } else {
//                 console.error('Failed to update order');
//             }
//         } catch (error) {
//             console.error('Error updating order:', error);
//         }
//     };

//     return (
//         <div>
//             <table className="min-w-full border-collapse border border-gray-200 mt-3">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 p-2">Order ID</th>
//                         <th className="border border-gray-300 p-2">User Info</th>
//                         <th className="border border-gray-300 p-2">Address</th>
//                         <th className="border border-gray-300 p-2">Shipping Cost</th>
//                         <th className="border border-gray-300 p-2">Total Price</th>
//                         <th className="border border-gray-300 p-2">Status</th>
//                         <th className="border border-gray-300 p-2">Date</th>
//                         <th className="border border-gray-300 p-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map((order) => (
//                         <tr key={order._id} className="bg-white border-b">
//                             <td className="border border-gray-300 p-2">{order._id}</td>
//                             <td className="border border-gray-300 p-2">
//                                 <p>Name: {order.user?.name || 'N/A'}</p>
//                                 <p>Email: {order.user?.email || 'N/A'}</p>
//                             </td>
//                             <td className="border border-gray-300 p-2">
//                                 {editingOrderId === order._id ? (
//                                     <>
//                                         <input
//                                             type="text"
//                                             name="phone"
//                                             value={updatedOrder.address?.phone || ""}
//                                             onChange={handleAddressChange}
//                                             placeholder="Phone"
//                                             className="border p-1 w-full mb-1"
//                                         />
//                                         <input
//                                             type="text"
//                                             name="house"
//                                             value={updatedOrder.address?.house || ""}
//                                             onChange={handleAddressChange}
//                                             placeholder="House"
//                                             className="border p-1 w-full mb-1"
//                                         />
//                                         <input
//                                             type="text"
//                                             name="street"
//                                             value={updatedOrder.address?.street || ""}
//                                             onChange={handleAddressChange}
//                                             placeholder="Street"
//                                             className="border p-1 w-full mb-1"
//                                         />
//                                         <input
//                                             type="text"
//                                             name="city"
//                                             value={updatedOrder.address?.city || ""}
//                                             onChange={handleAddressChange}
//                                             placeholder="City"
//                                             className="border p-1 w-full mb-1"
//                                         />
//                                         <input
//                                             type="text"
//                                             name="postalCode"
//                                             value={updatedOrder.address?.postalCode || ""}
//                                             onChange={handleAddressChange}
//                                             placeholder="Postal Code"
//                                             className="border p-1 w-full"
//                                         />
//                                     </>
//                                 ) : (
//                                     <>
//                                         <p>Phone: {order.address?.phone || "N/A"}</p>
//                                         <p>House: {order.address?.house || "N/A"}</p>
//                                         <p>Street: {order.address?.street || "N/A"}</p>
//                                         <p>City: {order.address?.city || "N/A"}</p>
//                                         <p>Postal Code: {order.address?.postalCode || "N/A"}</p>
//                                     </>
//                                 )}
//                             </td>
//                             <td className="border border-gray-300 p-2">
//                                 {editingOrderId === order._id ? (
//                                     <input
//                                         type="number"
//                                         name="shippingCost"
//                                         value={updatedOrder.shippingCost || ""}
//                                         onChange={handleChange}
//                                         className="border p-1 w-full"
//                                     />
//                                 ) : (
//                                     order.shippingCost
//                                 )}
//                             </td>
//                             <td className="border border-gray-300 p-2">{order.total}</td>
//                             <td className="border border-gray-300 p-2">
//                                 {editingOrderId === order._id ? (
//                                     <select
//                                         name="status"
//                                         value={updatedOrder.status}
//                                         onChange={handleChange}
//                                         className="border p-1 w-full"
//                                     >
//                                         <option value="Pending">Pending</option>
//                                         <option value="Processing">Processing</option>
//                                         <option value="Shipped">Shipped</option>
//                                         <option value="Delivered">Delivered</option>
//                                         <option value="Cancelled">Cancelled</option>
//                                     </select>
//                                 ) : (
//                                     order.status
//                                 )}
//                             </td>
//                             <td className="border border-gray-300 p-2">
//                                 {new Date(order.orderDate).toLocaleDateString()}
//                             </td>
//                             <td className="border border-gray-300 p-2 flex gap-2">
//                                 {editingOrderId === order._id ? (
//                                     <>
//                                         <button
//                                             onClick={saveOrder}
//                                             className="bg-blue-500 text-white px-2 py-1 rounded"
//                                         >
//                                             Save
//                                         </button>
//                                         <button
//                                             onClick={() => setEditingOrderId(null)}
//                                             className="bg-gray-500 text-white px-2 py-1 rounded"
//                                         >
//                                             Cancel
//                                         </button>
//                                     </>
//                                 ) : (
//                                     <button
//                                         onClick={() => handleEditClick(order)}
//                                         className="bg-yellow-500 text-white px-2 py-1 rounded"
//                                     >
//                                         Edit
//                                     </button>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default OrdersTable;



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
                        <th className="border border-gray-300 p-2">Address</th>
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
                                {/* <p>Name: {order.user.name}</p>
                                <p>Email: {order.user.email}</p> */}
                                <p>{order.user ? `UserID: ${order.user.uid}` : "Name: N/A"}</p>
                                <p>{order.user ? `Email: ${order.user.email}` : "Email: N/A"}</p>
                            </td>

                            <td className="border border-gray-300 p-2">
                                <p>Phone: {order.address?.phone || "N/A"}</p>
                                <p>House: {order.address?.house || "N/A"}</p>
                                <p>Street: {order.address?.street || "N/A"}</p>
                                <p>City: {order.address?.city || "N/A"}</p>
                                <p>Postal Code: {order.address?.postalCode || "N/A"}</p>
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

