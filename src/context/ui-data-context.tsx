import { LocalStorageConstants } from "@deriv-com/utils";
import { Dispatch, PropsWithChildren, SetStateAction, createContext } from "react";
import { Theme } from "types/ui.type";
import { useLocalStorage } from "usehooks-ts";

type UIData = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
    showAccountList: boolean;
    setShowAccountList: Dispatch<SetStateAction<boolean>>;
    showReportDrawer: boolean;
    setShowReportDrawer: Dispatch<SetStateAction<boolean>>;
};

export const UIDataContext = createContext<UIData | null>(null);

export const UIDataProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useLocalStorage<Theme>(LocalStorageConstants.uiTheme, "light");
    const [showAccountList, setShowAccountList] = useLocalStorage(LocalStorageConstants.uiExpandAccountSwitcher, false);
    const [showReportDrawer, setShowReportDrawer] = useLocalStorage(LocalStorageConstants.uiShowReportsDrawer, false);

    return (
        <UIDataContext.Provider
            value={{ theme, setTheme, showAccountList, setShowAccountList, showReportDrawer, setShowReportDrawer }}
        >
            {children}
        </UIDataContext.Provider>
    );
};
