import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  imageURL: String,
  arModel: { type: mongoose.Schema.Types.ObjectId, ref: 'ARModel' }, 
  voiceCommands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VoiceCommand' }], 
  stock: { type: Number, default: 0 },
  tags: [String]
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
