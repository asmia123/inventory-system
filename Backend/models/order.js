const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    total: {
      type: String,
      required: [true, "Please enter total"],
      trim: true,
    },
    tax: {
      type: Number,
      required: [true, "Please enter tax"],
      trim: true,
    },
    discount: {
      type: Number,
      trim: true,
      required: [true, "Give some discount"],
    },
    shipping: {
      type: Number,
      trim: true,
      required: [true, "Please enter shipping amount"],
    },
    grandtotal: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", itemSchema);
