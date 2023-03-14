const mongoose = require("mongoose");
const Category = require("../models/category");
const Brand = require("../models/brand");
const Product = require("../models/product");
exports.category = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  const category = {
    title: req.body.title,
    content: req.body.content
  };
  console.log(category);
  try {
    const savedcategory = await Category.create(category);
    res.status(201).json(savedcategory);
    console.log(savedcategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.show = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findById(categoryId);
    const product = await Product.find({category_id:categoryId});
    console.log({category,product});
    res.json({category,product});
    // res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  try {
    const brands = await Brand.deleteMany({categoryId: {$in: [ categoryId ]}});
    const products = await Product.deleteMany({categoryId: {$in: [ categoryId ]}});
    const categories = await Category.findByIdAndRemove(categoryId);

    res.status(201).json("Category deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
  const categoryId = req.params.categoryId;

  const category = {
    title: req.body.title,
    content: req.body.content
  };

  try {
    const savedcategory = await Category.findByIdAndUpdate(
      categoryId,
      category
    );
    res.status(201).json(savedcategory);
  } catch (err) {
    res.status(500).json(err);
  }
};
