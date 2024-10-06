import { create } from "zustand";

export interface SlotCharacteristic {
  type: string;
  value: number;
  sign: string | null;
}

export interface Slots {
  image: string;
  name: string;
  provider: string;
  chars: {
    rtp: SlotCharacteristic;
    volatility: SlotCharacteristic;
    bonus_freq: SlotCharacteristic;
    roi: SlotCharacteristic;
    ev: SlotCharacteristic;
  };
  themes: string[];
}

interface SlotsState {
  slots: Slots[];
  isLoading: boolean;
  error: string | null;
  fetchSlots: () => Promise<void>;
}

const useSlotStore = create<SlotsState>((set) => ({
  slots: [],
  isLoading: false,
  error: null,
  fetchSlots: async () => {
    set({ isLoading: true, error: null });

    const response = await fetch("https://n1partners.net.ru/api/temp");

    const { data } = await response.json();

    set({ slots: data, isLoading: false });
  },
}));

export default useSlotStore;
