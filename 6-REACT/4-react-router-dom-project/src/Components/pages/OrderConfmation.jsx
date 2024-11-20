import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useStateValue } from '../../StateProvider';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OrderConfirmation = ({ basket, setShowModal }) => {
    const { user } = useStateValue();
    const [customerFirstName, setCustomerFirstName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [customerEmail, setCustomerEmail] = useState(user?.email || '');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');


    // const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const handleOrderConfirmation = () => {

        // Calculate the total basket price
    const totalBasketPrice = basket.reduce((acc, item) => {
        const itemTotalPrice = (item.price * item.quantity) * (1 - item.discount / 100);
        return acc + itemTotalPrice;
    }, 0).toFixed(2);

        const orderDetails = basket.map(item => {
            return `
                Product: ${item.title}\n
                Quantity: ${item.quantity}\n
                Price: ${item.price} Taka\n
                Color: ${item.color} \n
                SKU: ${item.sku} \n
                Discount: ${item.discount}%\n
                Size: ${item.size}\n
                Total: ${((item.price * item.quantity) * (1 - item.discount / 100)).toFixed(2)} Taka\n
            `;
        }).join('\n');

        const message = `
            New Order Confirmation:
            Customer First Name : ${customerFirstName}
            Customer Last Name : ${customerLastName}
            Customer Email: ${customerEmail}
            Customer Phone: ${customerPhone || 'Not Provided'}
            Customer Address: ${customerAddress}
            Order Details:
            ${orderDetails}

             Total Basket Price: ${totalBasketPrice} Taka
        `;
        let toastSent = false;

        emailjs.send(
            'service_7pzzg5i',
            'template_g7y0gwl',
            {

                customerFirstName,
                customerLastName,
                customerEmail,
                customerPhone,
                customerAddress,
                message,
            },
            'uNVDwlTKVdUoxUjaQ'
        ).then((response) => {
            if (!toastSent) {
                toastSent = true;  // Set the flag to prevent multiple toasts
                setShowModal(false);
                toast.success('Thank you for shopping with us! Your order has been confirmed.');

                // Remove basket from localStorage and reset state

                // navigate("/"); // Redirect to homepage
                navigate("/?reload=true");
              
                localStorage.removeItem('basket'); // Clear the basket in localStorage
                dispatch({ type: 'EMPTY_BASKET' }); // Clear the basket in state
                

            };
        }).catch((error) => {
            if (!toastSent) {
                console.error('Error sending email', error);
                // setConfirmationMessage('Failed to send confirmation email. Please try again.');
                toast.error('Failed to confirm the order. Please try again.');
            }

        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Confirm Your Order</h2>

                <input
                    type="name"
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    placeholder="Your First Name"
                    required
                    className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBg"
                />
                <input
                    type="name"
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    placeholder="Your Last Name"
                    required
                    className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBg"
                />
                <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBg"
                />

                <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBg"
                />
                <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Enter your Address"
                    required
                    className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBg"
                />

                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => setShowModal(false)}
                        className="bg-rose-900 text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all"
                    >
                        Cancel !!
                    </button>
                    <button
                        onClick={handleOrderConfirmation}
                        className="bg-[#e49b0f] text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
