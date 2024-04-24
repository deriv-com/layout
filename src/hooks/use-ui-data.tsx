import { UIDataContext } from "context/ui-data-context";
import { useContext } from "react";

export const useUIData = () => {
    const context = useContext(UIDataContext);
    if (!context) {
        throw new Error("useUIData() should be used within the UIDataProvider");
    }
    return context;
};
