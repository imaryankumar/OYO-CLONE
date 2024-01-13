import ConnectDB from "@/db";
import userModel from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function Login(req, res) {
  try {
    if (req.method === "POST") {
      ConnectDB();
      const { email, password } = req.body;
      if (!email || !password) {
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
      const comparePassword = await bcrypt.compare(
        password,
        userExist.password
      );
      if (!comparePassword) {
        return res
          .status(400)
          .json({ success: false, msg: "Invalid Password" });
      }
      const token = jwt.sign({ token: userExist._id }, process.env.JWT_SECRET, {
        expiresIn: 7,
      });
      res.status(200).json({ success: true, msg: "Login Succesfully", token });
    }
  } catch (error) {
    console.log(error);
  }
}

export const api = {
  externalResolver: true,
  bodyParser: false,
};
