import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  deliveryStatus: { type: String, enum: ['processing', 'shipped', 'delivered'], default: 'processing' }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
