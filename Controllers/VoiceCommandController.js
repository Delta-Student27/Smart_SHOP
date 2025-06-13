import VoiceCommand from '../Models/VoiceCommand.js';

export const getVoiceCommands = async (req, res) => {
  try {
    const commands = await VoiceCommand.find({ userId: req.params.userId });
    res.json(commands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addVoiceCommand = async (req, res) => {
  try {
    const command = new VoiceCommand(req.body);
    await command.save();
    res.status(201).json(command);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
