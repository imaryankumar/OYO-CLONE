import ConnectDB from "@/db";
import hotelModal from "@/models/hotel.model";

export default async function Handler(req, res) {
  try {
    if (req.method === "GET") {
      ConnectDB();
      const allHotels = await hotelModal.find({});
      return res.status(200).json({ success: true, allHotels });
    }
  } catch (error) {
    console.log(error);
  }
}
