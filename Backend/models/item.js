const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    brand_id: {
      type: Schema.Types.ObjectId,
      ref: "brand",
      required: true,
    },
    profile: {
      type: String,
      required: [true, "Please enter Content"],
    },
    title: {
      type: String,
      required: [true, "Please enter title"],
      trim: true,
      unique: true,
      minlength: [3, "Title must contain atleast 3 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter price"],
      trim: true,
    },
    discount: {
      type: Number,
      trim: true,
      required: [true, "Give some discount"],
    },
    quantity: {
      type: Number,
      trim: true,
      required: [true, "Please enter Quantity"],
    },
    sold: {
      type: Number,
      trim: true,
      required: [true, "Please enter Sold Quantity"],
    },
    available: {
      type: Number,
      trim: true,
      required: [true, "Please enter available Quantity"],
    },
    defective: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("item", itemSchema);
