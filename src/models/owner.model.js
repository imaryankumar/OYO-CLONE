import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const OwnerModel =
  mongoose.models?.Owner || mongoose.model("Owner", ownerSchema);

export default OwnerModel;
