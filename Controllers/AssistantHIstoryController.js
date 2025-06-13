import AssistantHistory from '../Models/AssistantHistory.js';

export const getUserAssistantHistory = async (req, res) => {
  try {
    const history = await AssistantHistory.find({ userId: req.params.userId });
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addAssistantHistory = async (req, res) => {
  try {
    const entry = new AssistantHistory(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};