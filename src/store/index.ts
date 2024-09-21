import { create } from "zustand";

export const useNavigationStore = create(set => ({
  userInfo: {},
  lang: "cn",
  setUserInfo: (userInfo: any) => set({ userInfo }),
  clearUserInfo: () => set({ userInfo: {} }),
  setLang: (lang: string) => {
    localStorage.setItem("lang", lang);
    set({ lang });
  }
}));
