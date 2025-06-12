import mongoose from "mongoose";

const assistantHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  query: String,
  response: String,
  timestamp: { type: Date, default: Date.now }
});

const AssistantHistory = mongoose.model('AssistantHistory', assistantHistorySchema);
export default AssistantHistory;
