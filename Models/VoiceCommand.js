import mongoose from "mongoose";

const voiceCommandSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  commandText: { type: String, required: true },
  interpretedAction: { type: String }, 
  timestamp: { type: Date, default: Date.now },
  success: { type: Boolean, default: true },
  responseMessage: String
});

const VoiceCommand = mongoose.model('VoiceCommand', voiceCommandSchema);
export default VoiceCommand;
