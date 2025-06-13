import Reward from '../Models/Reward.js';

export const getUserReward = async (req, res) => {
  try {
    const reward = await Reward.findOne({ userId: req.params.userId });
    res.json(reward);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserReward = async (req, res) => {
  try {
    const reward = await Reward.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(reward);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
