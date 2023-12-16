import ConnectDB from "@/db";
import hotelModal from "@/models/hotel.model";

export default async function Handler(req, res) {
  try {
   
    // if (req.method === "POST") {
    //   const newHotel = new hotelModal(req.body);
    //   const result = await newHotel.save();
    //   res.status(201).json({
    //     success: true,
    //     result,
    //   });
    // }
   
    if (req.method === "GET") {
      ConnectDB();
      const hotels = await hotelModal.find({ location: req.query.city });
      if (hotels.length > 0) {
        return res.status(200).json({ success: true, hotels });
      }
      const allHotels = await hotelModal.find({});
      return res.status(200).json({ success: true, allHotels });
    }
  } catch (error) {
    console.log(error);
  }
}
