import create, { StoreApi, UseBoundStore } from "zustand";

type SplitBillType = {
  title?: string;
  setTitle?: Function;
  items?: any;
  setItemsPrice?: Function;
  addItems?: Function;
  deleteItems?: Function;
  setIndexNameItems?: Function;
};

export const SplitBill: UseBoundStore<StoreApi<SplitBillType>> = create(
  (set) => ({
    title: "",
    setTitle: (dataTitle: string) => set(() => ({ title: dataTitle })),

    items: [{ name: "", total_price: 0 }],
    addItems: (newItems: Array<object>) =>
      set((state) => ({
        items: [...state.items, newItems],
      })),
    deleteItems: (index: number) =>
      set((state) => {
        const array = state.items;
        if (index !== -1) {
          array.splice(index, 1);
        }
        return {
          items: array,
        };
      }),
    setIndexNameItems: (index: number, name: string) =>
      set((state) => {
        const array = state.items;
        if (index !== -1) {
          array.splice(index, 1);
          array.splice(index, 0, {
            name: name,
            total_price: state.items[index].total_price,
          });
        }
        return {
          items: array,
        };
      }),
    // setItemsPrice: (items: number, pieces: number, price: number) =>
    //   set((state) => ({
    //     items: (state.items[items] = {
    //       name: state.items[items].name,
    //       total_price: pieces * price,
    //     }),
    //   })),
  })
);
