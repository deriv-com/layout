import clsx from "clsx";
import { useUIData } from "hooks/use-ui-data";
import DashIcon from "@deriv/quill-icons/basic/dash.svg";

export const ReportsDrawer = () => {
    const { showReportDrawer } = useUIData();

    return (
        <div
            className={clsx(
                "fixed h-[calc(100vh-78px)] w-[272px] top-2400 py-800 pl-800 bg-[#fff] transition-all ease-in-out",
                {
                    "translate-x-[0px]": showReportDrawer,
                    "-translate-x-[272px]": !showReportDrawer,
                }
            )}
        >
            <div className="flex flex-col w-full h-full bg-[#F2F3F4] p-800 rounded-200">
                <div className="inline-flex w-full items-center mb-800">
                    <div className="text-[16px] leading-300 font-bold text">Recent Positions</div>
                    <div className="w-800 h-800 ml-auto">
                        <DashIcon />
                    </div>
                </div>
                <button className="font-bold border-100 border-[#999999] rounded-200 py-500 mt-auto cursor-pointer ease-in-out">
                    Go to Reports
                </button>
            </div>
        </div>
    );
};
