import ConnectDB from "@/db";
import OwnerModel from "@/models/owner.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default async function SignIn(req, res) {
  try {
    if (req.method === "POST") {
      ConnectDB();
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return res
          .status(404)
          .json({ sucess: false, msg: "All Fields are Mandatory" });
      }
      const emailExits = await OwnerModel.findOne({ email });
      if (emailExits) {
        return res
          .status(404)
          .json({ sucess: false, msg: "Owner Already Exists" });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const ownerCreated = await OwnerModel.create({
        username,
        email,
        password: hashPassword,
      });
      const token = jwt.sign(
        { token: ownerCreated._id },
        process.env.JWT_SECRET,
        {
          expiresIn: 7,
        }
      );
      return res.status(201).json({
        sucess: true,
        msg: "SignIn Successfully",
        ownerCreated,
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
export const api = {
  externalResolver: true,
  bodyParser: false,
};
