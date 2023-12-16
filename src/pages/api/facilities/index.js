import ConnectDB from "@/db";
import hotelModal from "@/models/hotel.model";

export default async function Handler(req, res) {
  try {
    if (req.method === "GET") {
      ConnectDB();
      const hotelFacility = await hotelModal
        .find({})
        .distinct("facilites.name");
      res
        .status(200)
        .json({ success: true, msg: "All Facilites Available", hotelFacility });
    }
  } catch (error) {
    console.log(error);
  }
}
