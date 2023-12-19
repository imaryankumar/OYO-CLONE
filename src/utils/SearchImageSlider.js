import Image from "next/image";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const SearchImageSlider = ({ item }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const onImageSliderOver = () => {
    setIsMouseOver(true);
  };
  const onImageSliderLeave = () => {
    setIsMouseOver(false);
  };
  const onSingleImageClick = (id) => {
    setSelectImage(id);
  };

  return (
    <div className="w-[50%] flex gap-2">
      <div
        className="w-[80%]"
        onMouseLeave={onImageSliderLeave}
        onMouseOver={onImageSliderOver}
      >
        <Carousel
          responsive={responsive}
          infinite
          arrows={isMouseOver ? true : false}
        >
          {item?.gallery.map((image, key) => {
            return (
              <Image
                key={key}
                src={selectImage || image}
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                }}
                alt="Hotelsimages"
              />
            );
          })}
        </Carousel>
      </div>

      <div className="h-auto border w-[20%] flex flex-col items-center justify-between ">
        {item.gallery.slice(0, 4).map((img, key) => {
          return (
            <div key={key} className="relative">
              <Image
                src={img}
                width={100}
                height={100}
                alt="image"
                onClick={() => onSingleImageClick(img)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchImageSlider;
