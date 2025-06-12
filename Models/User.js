import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  preferences: Object,
  savedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  voiceLanguage: { type: String, default: 'en' },
  accessibilitySettings: Object
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
