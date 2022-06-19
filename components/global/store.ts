import create, { StoreApi, UseBoundStore } from "zustand";

type SplitBillType = {
  title?: string;
  setTitle?: Function;
  items?: any;
  setItemsPrice?: Function;
  addItems?: Function;
  deleteItems?: Function;
};

export const SplitBill: UseBoundStore<StoreApi<SplitBillType>> = create(
  (set) => ({
    title: "",
    setTitle: (dataTitle: string) => set(() => ({ title: dataTitle })),
    items: [],
    addItems: (newItems: Array<object>) =>
      set((state) => ({
        items: [...state.items, newItems],
      })),
    deleteItems: (index: number) =>
      set((state) => ({
        items: state.items.splice(index, 1),
      })),
    // setItemsPrice: (items: number, pieces: number, price: number) =>
    //   set((state) => ({
    //     items: (state.items[items] = {
    //       name: state.items[items].name,
    //       total_price: pieces * price,
    //     }),
    //   })),
  })
);
