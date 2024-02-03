import { useState } from "react";
const HotelAccomodationType = () => {
  const AllHotelCollections = ["OYO Home", "Hotel"];
  const [showallCollection, setShowallCollection] = useState(false);
  return (
    <div className=" flex flex-col py-3 border-b-2 gap-3">
      <h2 className="text-xl font-medium">Accomodation Type</h2>
      <div>
        {AllHotelCollections.slice(0, 5).map((collection, key) => {
          return (
            <div
              key={key}
              className="flex items-center justify-start gap-3 text-lg"
            >
              <input
                type="checkbox"
                id={collection}
                name="Accomodation"
                className="checkbox-custom"
              />
              <label htmlFor={collection} className="cursor-pointer">
                {collection}
              </label>
            </div>
          );
        })}
        {showallCollection && (
          <>
            {AllHotelCollections.slice(5).map((collection, key) => {
              return (
                <div
                  key={key}
                  className="flex items-center justify-start gap-3 text-lg"
                >
                  <input
                    type="checkbox"
                    id={collection}
                    name="Accomodation"
                    className="checkbox-custom"
                  />
                  <label htmlFor={collection} className="cursor-pointer">
                    {" "}
                    {collection}
                  </label>
                </div>
              );
            })}
          </>
        )}
        {AllHotelCollections?.length > 5 && (
          <div className="CollectionList-Gap">
            {showallCollection ? (
              <span
                className="text-red-500 cursor-pointer font-medium "
                onClick={() => setShowallCollection((prev) => !prev)}
              >
                - View Less
              </span>
            ) : (
              <span
                className="text-red-500 cursor-pointer font-medium "
                onClick={() => setShowallCollection((prev) => !prev)}
              >
                + View More
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelAccomodationType;
