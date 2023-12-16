import ConnectDB from "@/db";
import hotelModal from "@/models/hotel.model";

export default async function Handler(req, res) {
  try {
    if (req.method === "GET") {
      ConnectDB();
      const key = req.query.val;
      const searchHotel = await hotelModal.find({
        "facilites.name": { $in: key },
      });
      const searchLength = searchHotel.length;
      res.status(200).json({
        success: true,
        searchHotel,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
