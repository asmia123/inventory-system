const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItemSchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    item_id: {
      type: Schema.Types.ObjectId,
      ref: "item",
      required: true,
    },
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "order",
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Please enter price"],
      trim: true,
    },
    discount: {
      type: Number,
      required: [true, "Please give some discount"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "Please enter quantity"],
      trim: true,
    },
    content: {
      type: String,
      trim: true,
      required: [true, "Please enter Content"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orderItem", orderItemSchema);
