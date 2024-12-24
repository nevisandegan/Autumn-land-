import mongoose from "mongoose";

const cabinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    maxCapacity: {
      type: Number,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
    discription: String,
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: { virtuals: true },
  }
);

const Cabin = mongoose.models.Cabin || mongoose.model("Cabin", cabinSchema);

export default Cabin;
