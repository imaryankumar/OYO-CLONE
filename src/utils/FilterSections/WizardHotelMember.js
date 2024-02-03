import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const WizardHotelMember = () => {
  return (
    <div className="flex flex-col  py-3 border-b-2 gap-3">
      <div>
        <h2 className="text-xl font-medium">Wizard Member OYOs</h2>
        <span className="font-light text-lg">Get 5% off on member hotels</span>
      </div>
      <div className=" bg-gradiant wizard-width flex items-center justify-center gap-1 rounded text-white ">
        <span>
          <MdOutlineWorkspacePremium size={25} />
        </span>
        <span>WIZARD MEMBER</span>
      </div>
    </div>
  );
};

export default WizardHotelMember;
