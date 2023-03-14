const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please enter title"],
      trim: true,
      minlength: [4, "Title must contain atleast 4 characters"],
    },
    summary: {
      type: String,
      required: [true, "Please enter summary"],
      trim: true,
      minlength: [10, "Summary must contain atleast 4 characters"],
      maxlength: [100, "Summary must not exceed than 100 characters"],
    },
    
    content: {
      type: String,
      trim: true,
      required: [true, "Please enter Content"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("brand", brandSchema);
