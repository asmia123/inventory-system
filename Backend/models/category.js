const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var URLSlug = require("mongoose-slug-generator");
const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};
mongoose.plugin(URLSlug,options);

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title"],
      trim: true,
      minlength: [4, "Title must contain atleast 4 characters"],
    },
    slug: {
      type: String,
      slug: "title",
    },
    content: {
      type: String,
      trim: true,
      required: [true, "Please enter Content"],
    },
  },
  { timestamps: true }
);



module.exports = mongoose.model("category", categorySchema);
