const mongoose = require("mongoose");
const Product = require("../models/product");
exports.products = async (req, res, next) => {
  try {
    const products = await Product.find().populate("category_id");
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  const product = {
    category_id: req.body.category_id,
    title: req.body.title,
    summary: req.body.summary,
    profile: req.file.filename,
  };

  try {
    const savedproduct = await Product.create(product);
    res.status(201).json(savedproduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.show = async (req, res, next) => {
  const productId = req.params.productId;

  try {
    const products = await Product.findById(productId).populate("category_id");

    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findByIdAndRemove(productId);
    res.status(204).json("Product deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
  const productId = req.params.productId;
  if(req.file){
     product = {
      category_id: req.body.category_id,
      title: req.body.title,
      summary: req.body.summary,
      profile: req.file.filename,
    };
  }
  else{
     product = {
      category_id: req.body.category_id,
      title: req.body.title,
      summary: req.body.summary
    };
  }
  
  try {
    const savedproduct = await Product.findByIdAndUpdate(productId, product);
    const updatedproduct = await Product.findById(productId);
    res.status(201).json(updatedproduct);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
