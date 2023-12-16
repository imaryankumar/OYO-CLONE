import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String,
      required: true,
    },
    gallery: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
    },
    baseprice: {
      type: Number,
    },
    facilites: [
      {
        img: String,
        name: String,
      },
    ],
    location: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

const hotelModal =
  mongoose.models?.hotel || mongoose.model("hotel", hotelSchema);

export default hotelModal;
