import ConnectDB from "@/db";
import hotelModal from "@/models/hotel.model";

export default async function Handler(req, res) {
  try {
    if (req.method === "GET") {
      ConnectDB();
      const rangeHotel = await hotelModal.find({
        price: { $lte: req.query.price },
      });
      res.status(200).json({
        success: true,
        msg: "Price Range",
        rangeHotel,
      });
    }
  } catch (error) {}
}
