import React from "react";

export default function TransactionComponent({ profileImage, name, date, transactionId, amount }) {
  return (
    <div className="flex justify-between  border-b border-[#E0E0E0] pb-[10px] mb-[10px]">
      <div className="flex gap-2">
        <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full" />
        <p className="text-[#505050] text-sm mt-2">
          {name}
        </p>
      </div>

      <div >
        <div className="flex gap-28 mt-2 text-[#505050]">
          <p className="text-sm mr-[-30px] relative">{date}</p>
          <p className="text-sm">{transactionId}</p>
          <p className="text-sm">{amount}</p>
        </div>
      </div>
    </div>
  );
}
