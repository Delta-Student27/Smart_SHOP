import mongoose from "mongoose";

const arModelSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  modelName: { type: String, required: true },
  fileURL: { type: String, required: true }, // e.g., hosted .glb or .usdz file
  fileType: { type: String, enum: ['glb', 'usdz', 'fbx', 'obj'], default: 'glb' },
  previewImage: { type: String }, // optional thumbnail
  createdAt: { type: Date, default: Date.now }
});

const ARModel = mongoose.model('ARModel', arModelSchema);
export default ARModel;
