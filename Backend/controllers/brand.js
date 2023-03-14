const mongoose = require("mongoose");
const Brand = require("../models/brand");
exports.brands = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.create = async (req, res, next) => {
  const brand = {
    product_id : req.body.product_id,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
  };

  try {
    const savedbrand = await Brand.create(brand);

    res.status(201).json(savedbrand);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.show = async (req, res, next) => {
  const brandId = req.params.brandId;

  try {
    const brands = await Brand.findById(brandId);

    res.json(brands);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res, next) => {
  const brandId = req.params.brandId;
  try {
    const brand = await Brand.findByIdAndRemove(brandId);
    res.status(204).json("brand deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.update = async (req, res, next) => {
  const brandId = req.params.brandId;
  const brand = {
    product_id: req.body.product_id,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
  };
  try {
    const savedbrand = await Brand.findByIdAndUpdate(brandId, brand);
    const updatedbrand= await Brand.findById(brandId);
    res.status(201).json(updatedbrand);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
