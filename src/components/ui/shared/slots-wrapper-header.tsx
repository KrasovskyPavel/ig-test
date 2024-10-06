import { Title, TitleColor } from "../title";
import { Slots } from "@/store/slots";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useFilterSlots } from "@/hooks";

interface Props {
  className?: string;
  slots: Slots[];
}

export const SlotsWrapperHeader: React.FC<Props> = ({ className, slots }) => {
  const { searchValue, setSearchValue } = useFilterSlots();

  return (
    <div className={className}>
      <div className="flex bg-[#201E21] rounded-[90px] gap-5 w-[179px] py-[16.5px] px-[18.9px]">
        <Title size="sm" color={TitleColor.grey} text="Found" />
        <Title size="sm" text={`${slots.length} SLOTS`} />
      </div>

      <div className="flex content-between items-center bg-[#201E21] w-[654px] rounded-[30px] py-[10px] px-[18.9px]">
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="ENTER REQUEST"
        />
        <MagnifyingGlassIcon width={30} height={30} color="#545454" />
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[180px] bg-[#201E21] rounded-[90px] text-[#FFFFFF99]">
            <SelectValue placeholder="Sort By Popularity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="popularity">Sort By Popularity</SelectItem>
              <SelectItem value="variant1">Sort By Variant1</SelectItem>
              <SelectItem value="variant2">Sort By Variant2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
