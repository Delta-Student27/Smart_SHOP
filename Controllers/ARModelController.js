import ARModel from '../Models/ARModel.js';

export const getARModelByProduct = async (req, res) => {
  try {
    const model = await ARModel.findOne({ productId: req.params.productId });
    res.json(model);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createARModel = async (req, res) => {
  try {
    const model = new ARModel(req.body);
    await model.save();
    res.status(201).json(model);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateARModel = async (req, res) => {
  try {
    const updated = await ARModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
