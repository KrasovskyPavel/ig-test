import React, { useState } from "react";
import { CartSlot } from "./cart-slot";
import { PaginationCart } from "./pagination-cart";
import { Skeleton } from "../skeleton";
import { Slots } from "@/store/slots";

interface Props {
  className?: string;
  slots: Slots[];
  isLoading: boolean;
}

export const SlotsWrapperContent: React.FC<Props> = ({ className, slots, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [slotsPerPage] = useState(9);

  console.log("isLoading", isLoading);

  const lastSlotIndex = currentPage * slotsPerPage;
  const firstSlotIndex = lastSlotIndex - slotsPerPage;
  const currentPageSlots = slots.slice(firstSlotIndex, lastSlotIndex);

  return (
    <div className={className}>
      <div className="h-[1815px]">
        {isLoading ? (
          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-[578px] w-[336px] rounded-[22.58px] bg-[#353338]"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {currentPageSlots.map((slot, index) => (
              <CartSlot key={index} slot={slot} className="w-[336px]" />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <PaginationCart
          slots={slots}
          currentPage={currentPage}
          slotsPerPage={slotsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
