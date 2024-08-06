import { create } from "zustand";
import {LoginStoreType} from "./common/types/loginType.tsx";

export const useLoginStore = create<LoginStoreType>((set) => ({
    isLogin: false,
    setIsLogin: (isLogin: boolean) => {
        set(() => ({ isLogin: isLogin }));
    },
}));

export default useLoginStore;