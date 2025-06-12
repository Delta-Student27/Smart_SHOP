import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  points: Number,
  missionsCompleted: [String],
  badgesEarned: [String],
  redeemHistory: [{
    item: String,
    pointsUsed: Number,
    date: { type: Date, default: Date.now }
  }]
});

const Reward = mongoose.model('Reward', rewardSchema);
export default Reward;
