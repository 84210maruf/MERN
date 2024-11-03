const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  basket: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
      title: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      discount: { type: Number, default: 0 }, // Discount per item, if applicable
    }
  ],
  shippingCost: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  orderDate: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Order', OrderSchema);
