import { Outlet } from "react-router-dom";
import { AppTopNavBar } from "./top-nav";
import { AppBottomNavBar } from "./app-bottom-navbar";
import { ReportsDrawer } from "./reports-drawer";
import { useUIData } from "hooks/use-ui-data";
import clsx from "clsx";

const AppLayout = () => {
    const { showReportDrawer } = useUIData();

    return (
        <div className="w-full relative">
            <AppTopNavBar />
            <div
                className={clsx("flex mt-2400 transition-all ease-in-out", {
                    "w-[calc(100%-272px)] translate-x-[272px]": showReportDrawer,
                    "w-full": !showReportDrawer,
                })}
            >
                <div className="w-full p-800">
                    <Outlet />
                </div>
            </div>
            <ReportsDrawer />
            <AppBottomNavBar />
        </div>
    );
};

export default AppLayout;
