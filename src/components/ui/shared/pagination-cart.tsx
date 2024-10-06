import { Slots } from "@/store/slots";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";

interface Props {
  slots: Slots[];
  slotsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const PaginationCart: React.FC<Props> = ({
  slots,
  slotsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(slots.length / slotsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        className={`flex items-center justify-center w-[40px] h-[40px] border border-[#2A2A2A] rounded-[90px] ${
          currentPage === 1 ? "border border-[#2A2A2A] bg-white" : "bg-[#2A2A2A]"
        }`}
      >
        <ChevronLeftIcon
          className={currentPage === 1 ? "text-[#2A2A2A]" : "text-white"}
          width={20}
          height={20}
        />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`w-[40px] h-[40px] border border-[#2A2A2A] rounded-[90px] text-[14px] ${
              currentPage === page ? "bg-[#2A2A2A] text-white" : "bg-white text-[#2A2A2A]"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        className={`flex items-center justify-center bg-[#2A2A2A] w-[40px] h-[40px] rounded-[90px] ${
          currentPage === totalPages ? "border border-[#2A2A2A] bg-white" : "bg-[#2A2A2A]"
        }`}
      >
        <ChevronRightIcon
          color={currentPage === totalPages ? "#2A2A2A" : "#C4CDD5"}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
