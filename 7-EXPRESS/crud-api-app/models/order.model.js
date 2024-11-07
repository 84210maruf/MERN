const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {

  },
  basket: [

  ],
  shippingCost: {
    type: Number,
    required: true,
  },
  // address: {

  // },
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
