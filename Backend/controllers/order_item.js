const OrderItem = require("../models/order_item");
exports.items = async (req, res, next) => {
  try {
    const item = await OrderItem.find();
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.create = async (req, res, next) => {
    const product_id = req.body.product_id;
    const item_id = req.body.item_id;
    const order_id = req.body.order_id;
    const price = req.body.price;
    const discount = req.body.discount;
    const quantity = req.body.quantity;
    const content = req.body.content;
    const item = {
        product_id:product_id,
        item_id:item_id,
        order_id:order_id,
        price:price,
        discount:discount,
        quantity:quantity,
        content:content,
    }
    try {
        const saveditem = await OrderItem.create(item);
        res.status(201).json(saveditem);
        console.log(saveditem);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
};
exports.show = async (req, res, next) => {
  const OrderitemId = req.params.OrderitemId;
  try {
    const items = await OrderItem.findById(OrderitemId);
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.delete = async (req, res, next) => {
    const OrderitemId = req.params.OrderitemId;

  try {
    const items = await OrderItem.findByIdAndRemove(OrderitemId);
    res.status(204).json("Item deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
    const OrderitemId = req.params.OrderitemId;
 
    const product_id = req.body.product_id;
    const item_id = req.body.item_id;
    const order_id = req.body.order_id;
    const price = req.body.price;
    const discount = req.body.discount;
    const quantity = req.body.quantity;
    const content = req.body.content;
    const item = {
        product_id:product_id,
        item_id:item_id,
        order_id:order_id,
        price:price,
        discount:discount,
        quantity:quantity,
        content:content,
    }

  try {
    const saveditem = await OrderItem.findByIdAndUpdate(itemId, item);
    const newitem = await OrderItem.findById(itemId);
    res.status(201).json(newitem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


