import Cart from '../Models/Cart.js';

export const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
