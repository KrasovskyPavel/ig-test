import { QueryParams } from "@/hooks/useQueryParams";
import { Slots } from "@/store/slots";

export const filterSlots = (slots: Slots[], queryParams: QueryParams): Slots[] => {
  return slots.filter((slot) => {
    const {
      rtpMin,
      rtpMax,
      volatilityMin,
      volatilityMax,
      roiMin,
      roiMax,
      evMin,
      evMax,
      selectedThemes,
      selectedProviders,
      searchValue,
    } = queryParams;

    // Фильтрация по RTP
    const rtpMatch =
      (rtpMin === null || slot.chars.rtp.value >= rtpMin) &&
      (rtpMax === null || slot.chars.rtp.value <= rtpMax);

    // Фильтрация по волатильности
    const volatilityMatch =
      (volatilityMin === null || slot.chars.volatility.value >= volatilityMin) &&
      (volatilityMax === null || slot.chars.volatility.value <= volatilityMax);

    // Фильтрация по ROI
    const roiMatch =
      (roiMin === null || slot.chars.roi.value >= roiMin) &&
      (roiMax === null || slot.chars.roi.value <= roiMax);

    // Фильтрация по EV
    const evMatch =
      (evMin === null || slot.chars.ev.value >= evMin) &&
      (evMax === null || slot.chars.ev.value <= evMax);

    // Фильтрация по темам
    const themeMatch =
      selectedThemes.size === 0 || slot.themes.some((theme) => selectedThemes.has(theme));

    // Фильтрация по провайдерам
    const providerMatch = selectedProviders.size === 0 || selectedProviders.has(slot.provider);

    // Фильтрация по поиску
    const searchMatch = searchValue
      ? slot.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;

    return (
      rtpMatch &&
      volatilityMatch &&
      roiMatch &&
      evMatch &&
      themeMatch &&
      providerMatch &&
      searchMatch
    );
  });
};
