import ConnectDB from "@/db";
import hotelModal from "@/models/hotel.model";
export default async function Handler(req, res) {
  try {
    if (req.method === "GET") {
      ConnectDB();
      if (req.query.id) {
        const hotelId = await hotelModal.findById(req.query.id);
        return res
          .status(200)
          .json({ success: true, msg: "Hotel Details", hotelId });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
