import ConnectDB from "@/db";
import hotelModal from "@/models/hotel.model";

export default async function Handler(req, res) {
  try {
    if (req.method === "POST") {
      const {
        name,
        description,
        banner,
        gallery,
        price,
        baseprice,
        location,
        rating,
      } = req.body;
      if (
        !name ||
        !description ||
        !banner ||
        !gallery ||
        !price ||
        !baseprice ||
        !location ||
        !rating
      ) {
        return res
          .status(400)
          .json({ sucess: false, msg: "All Fields are Mandatory" });
      }
      const newHotel = await hotelModal.create({
        name,
        description,
        banner,
        gallery,
        price,
        baseprice,
        location,
        rating,
      });
      console.log("new Hotel", newHotel);
    }

    if (req.method === "GET") {
      ConnectDB();
      const hotels = await hotelModal.find({ location: req.query.city });
      if (hotels.length > 0) {
        return res.status(200).json({ success: true, hotels });
      } else {
        return res.status(400).json({ success: true, msg: "Hotels Not Found" });
      }
      // const allHotels = await hotelModal.find({});
      // return res.status(200).json({ success: true, allHotels });
    }
  } catch (error) {
    console.log(error);
  }
}
