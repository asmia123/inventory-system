const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please enter title"],
      trim: true,
      minlength: [2, "Title must contain atleast 4 characters"],
    },
    summary: {
      type: String,
      required: [true, "Please enter summary"],
      trim: true,
      minlength: [4, "Summary must contain atleast 4 characters"],
      maxlength: [100, "Summary must not exceed than 100 characters"],
    },
    
    profile: {
      type: String,
      required: [true, "Please enter Content"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
