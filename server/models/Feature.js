const mongoose = require("mongoose");

const FeatureSchema = mongoose.Schema(
  {
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feature", FeatureSchema);
