import { LocalStorageConstants } from "@deriv-com/utils";
import { useActiveSymbols } from "@deriv-com/api-hooks";
import { useLocalStorage } from "usehooks-ts";

type TraderLayout = {
    selectedSymbol: string;
};

const AssetSwitcher = () => {
    const { data } = useActiveSymbols();
    const [traderLayout] = useLocalStorage<TraderLayout>(LocalStorageConstants.traderLayout, {
        selectedSymbol: "1HZ100V",
    });

    const { selectedSymbol } = traderLayout;
    const matchingSymbol = data?.find((d) => d.symbol === selectedSymbol);

    return (
        <div className="w-[269px] h-[72px] bg-[#F2F3F4] p-400 rounded-200">
            <div className="inline-flex w-full h-full bg-[#fff] pl-400 py-400 pr-800 gap-x-800 rounded-200">
                <div className=""></div>
                <div className="flex flex-col">
                    <div className="text-[16px] font-bold leading-300">{matchingSymbol?.display_name}</div>
                    <div className="text-[12px] text-[#999999]">14.0192 - 0.12 (0.12%)</div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default AssetSwitcher;
