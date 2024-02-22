import ConnectDB from "@/db";
import OwnerModel from "@/models/owner.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function LogIn(req, res) {
  try {
    if (req.method === "POST") {
      ConnectDB();
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(404)
          .json({ success: false, msg: "All Fields are Required" });
      }
      const ownerExist = await OwnerModel.findOne({ email });
      if (!ownerExist) {
        return res
          .status(404)
          .json({ success: false, msg: "owner not Registered" });
      }
      const comparePassword = await bcrypt.compare(
        password,
        ownerExist.password
      );
      if (!comparePassword) {
        return res
          .status(400)
          .json({ success: false, msg: "Invalid Password" });
      }
      const token = jwt.sign(
        { token: ownerExist._id },
        process.env.JWT_SECRET,
        {
          expiresIn: 7,
        }
      );
      res.status(200).json({ success: true, msg: "SignIn Succesfully", token });
    }
  } catch (error) {
    console.log(error);
  }
}

export const api = {
  externalResolver: true,
  bodyParser: false,
};
