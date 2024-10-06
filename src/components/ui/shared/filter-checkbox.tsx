import React from "react";
import { Checkbox } from "../checkbox";
import { Title, TitleColor } from "../title";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2 bg-[#010003] px-[12px] py-[9.5px]">
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        <Title size="xs" color={TitleColor.grey} text={text} />
      </label>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[2px] w-[18px] h-[18px]"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
    </div>
  );
};
