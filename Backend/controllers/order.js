const Order = require("../models/order");
exports.orders = async (req, res, next) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.create = async (req, res, next) => {
    const user_id = req.body.product_id;
    const total = req.body.title;
    const tax = req.body.tax;
    const discount = req.body.discount;
    const shipping = req.body.shipping;
    const grandtotal = req.body.grandtotal;
    
    const order = {
        user_id:user_id,
        total:total,
        tax:tax,
        discount:discount,
        shipping:shipping,
        grandtotal:grandtotal,
    }
    try {
        const savedorder = await Order.create(order);
        res.status(201).json(savedorder);
        console.log(savedorder);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
};
exports.show = async (req, res, next) => {
  const orderId = req.params.orderId;
  try {
    const order = await Order.findById(orderId);
    res.json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.delete = async (req, res, next) => {
    const orderId = req.params.orderId;

  try {
    const orders = await Order.findByIdAndRemove(orderId);
    res.status(204).json("order deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
    const orderId = req.params.orderId;
 
    const user_id = req.body.product_id;
    const total = req.body.title;
    const tax = req.body.tax;
    const discount = req.body.discount;
    const shipping = req.body.shipping;
    const grandtotal = req.body.grandtotal;
    
    const order = {
        user_id:user_id,
        total:total,
        tax:tax,
        discount:discount,
        shipping:shipping,
        grandtotal:grandtotal,
    }

  try {
    const savedorder = await Order.findByIdAndUpdate(orderId, order);
    const neworder = await Order.findById(orderId);
    res.status(201).json(neworder);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


