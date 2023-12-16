import ConnectDB from "@/db";
import userModel from "@/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default async function Register(req, res) {
  try {
    if (req.method === "POST") {
      ConnectDB();
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ sucess: false, msg: "All Fields are Mandatory" });
      }
      const emailExits = await userModel.findOne({ email });
      if (emailExits) {
        return res
          .status(400)
          .json({ sucess: false, msg: "user Already Exists" });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const userCreated = await userModel.create({
        name,
        email,
        password: hashPassword,
      });
      const token = jwt.sign(
        { token: userCreated._id },
        process.env.JWT_SECRET,
        {
          expiresIn: 7,
        }
      );
      res.status(201).json({
        sucess: true,
        msg: "Registered Successfully",
        userCreated,
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
