import BriefcaseIcon from "@deriv/quill-icons/basic/briefcase.svg";
import { useUIData } from "hooks/use-ui-data";

export const AppBottomNavBar = () => {
    const { setShowReportDrawer } = useUIData();

    return (
        <div className="fixed w-full inline-flex items-center h-1600 bottom-50 left-50 px-400 border-t-100 bg-[#fff] border-solid-slate-100">
            <div className="cursor-pointer" onClick={() => setShowReportDrawer((prev) => !prev)}>
                <BriefcaseIcon />
            </div>
            <div className="inline-flex ml-auto">
                <div className="rounded-full bg-solid-green-900"></div>
            </div>
        </div>
    );
};
