import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'

interface checkMobileDTO {
    mobile: boolean;
    setMobile: (args: boolean) => void;
}

const checkMobile = create<checkMobileDTO>()(
    persist(
        (set, get) => ({
            mobile: false,
            setMobile: (args: boolean) => {
                set(() => ({
                    mobile: args
                }))
            }
        }),
        {
            name: 'LoginSession',
            storage: createJSONStorage(() => localStorage),
            version: 1.0
        }
    )
)

export {
    checkMobile
};