import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

interface Web3Store {
  isActive: boolean;
  chainId: number | null;
  account: string;
  isDisconnected: boolean;
  users: any;
  current: number;
  chainInfo: any;
  updateState?: (payload: Partial<Web3Store>) => any;
  clearState?: () => void;
  open?: () => void;
}

const initState: Web3Store = {
  isActive: false,
  isDisconnected: false,
  chainId: null,
  chainInfo: {},
  users: null,
  current: 0,
  account: ""
};

interface Iinfo {
  users?: any;
}

interface BearState {
  userInfo?: Iinfo;
  setUserInfo?: (data: Iinfo) => void;
  clearState?: (data: Iinfo) => void;
}

const userState: BearState = {
  userInfo: {}
};

// export const useWeb3Store = create<Web3Store, [["zustand/immer", never]]>(
//   immer(set => ({
//     ...initState,
//     updateState: (payload: any) =>
//       set((state: any) => {
//         Object.keys(payload).forEach((key: any) => (state[key] = payload[key]));
//       }),
//     clearState: () => set(() => ({ ...initState }))
//   }))
// );

export const useWeb3Store = create<any>(set => ({
  ...initState,
  updateState: (payload: any) =>
    set((state: any) => {
      Object.keys(payload).forEach((key: any) => (state[key] = payload[key]));
    }),
  clearState: () => set(() => ({ ...initState }))
}));

export const useUserStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        ...userState,
        setUserInfo: (data: any) =>
          set((state: any) => {
            Object.keys(data).forEach(key => (state[key] = data[key]));
            return { ...state };
          }),
        clearState: () => set(() => ({ ...userState }))
      }),
      {
        name: "userInfo"
      }
    )
  )
);
