const Item = require("../models/item");
exports.items = async (req, res, next) => {
  try {
    const item = await Item.find().populate("product_id").populate("brand_id");
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.create = async (req, res, next) => {
    const product_id = req.body.product_id;
    const brand_id = req.body.brand_id;
    const profile = req.file.filename;
    const title = req.body.title;
    const price = req.body.price;
    const discount = req.body.discount;
    const quantity = req.body.quantity;
    const sold = req.body.sold;
    const available = req.body.available;
    const defective = req.body.defective;
    const item = {
        product_id:product_id,
        brand_id:brand_id,
        profile: profile,
        title:title,
        price:price,
        discount:discount,
        quantity:quantity,
        sold:sold,
        available:available,
        defective:defective
    }
    try {
        const saveditem = await Item.create(item);
        res.status(201).json(saveditem);
        console.log(saveditem);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
};
exports.show = async (req, res, next) => {
  const itemId = req.params.itemId;
  try {
    const items = await Item.findById(itemId).populate("product_id").populate("brand_id");
    res.json({items});
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.delete = async (req, res, next) => {
    const itemId = req.params.itemId;

  try {
    const items = await Item.findByIdAndRemove(itemId);
    res.status(204).json("Item deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
    const itemId = req.params.itemId;
 
    const product_id = req.body.product_id;
    const brand_id = req.body.brand_id;
    const title = req.body.title;
    const price = req.body.price;
    const discount = req.body.discount;
    const quantity = req.body.quantity;
    const sold = req.body.sold;
    const available = req.body.available;
    const defective = req.body.defective;
    const item = {
        product_id:product_id,
        brand_id:brand_id,
        title:title,
        price:price,
        discount:discount,
        quantity:quantity,
        sold:sold,
        available:available,
        defective:defective
    }

  try {
    const saveditem = await Item.findByIdAndUpdate(itemId, item);
    const newitem = await Item.findById(itemId);
    res.status(201).json(newitem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


