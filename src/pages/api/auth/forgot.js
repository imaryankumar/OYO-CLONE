import ConnectDB from "@/db";
import userModel from "@/models/user.model";
import jwt from "jsonwebtoken";

export default async function Login(req, res) {
  try {
    if (req.method === "POST") {
      ConnectDB();
      const { email } = req.body;
      if (!email) {
        return res
          .status(400)
          .json({ success: false, msg: "All Fields are Required" });
      }
      const userExist = await userModel.findOne({ email });
      if (!userExist) {
        return res
          .status(400)
          .json({ success: false, msg: "user not Registered" });
      }
      const token = jwt.sign({ token: userExist._id }, process.env.JWT_SECRET, {
        expiresIn: 7,
      });

      res.status(200).json({ success: true, msg: "Forgot Succesfully", token });
    }
  } catch (error) {
    console.log(error);
  }
}
export const config = {
  api: {
    externalResolver: true,
  },
};
