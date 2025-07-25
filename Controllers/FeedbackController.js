import Feedback from '../Models/Feedback.js';

export const getProductFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ productId: req.params.productId });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const submitFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};