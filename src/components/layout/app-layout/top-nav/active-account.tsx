import { useUIData } from "hooks/use-ui-data";
import clsx from "clsx";
import DerivAccountSwitcher from "@deriv/quill-icons/branding/deriv-apps.svg";
import ChevronDownIcon from "@deriv/quill-icons/basic/chevron-down.svg";
import { Currency, CurrencyCard } from "components/card/currency-card";
import { FormatUtils } from "@deriv-com/utils";
import { LandingCompanyBadge } from "components/badge/landing-company-badge";
import BlockLoader from "components/loader/block-loader";
import { useActiveDerivTradingAccount } from "hooks/useActiveDerivTradingAccount";

const ActiveAccount = () => {
    const { data, isLoading } = useActiveDerivTradingAccount();
    const { showAccountList, setShowAccountList } = useUIData();

    return (
        <div
            className="inline-flex gap-400 items-center px-800 py-600 select-none cursor-pointer"
            onClick={() => setShowAccountList((prev) => !prev)}
        >
            <BlockLoader className="w-[24px] min-h-[24px]" isLoading={isLoading}>
                <DerivAccountSwitcher />
            </BlockLoader>
            <BlockLoader className="w-[40px] min-h-[24px]" isLoading={isLoading}>
                <CurrencyCard
                    className="w-[40px]"
                    currency={data?.is_virtual || !data?.currency ? "VRTCUSD" : (data?.currency as Currency)}
                />
            </BlockLoader>
            <BlockLoader className="min-w-[138px] min-h-[24px]" isLoading={isLoading}>
                <div className="text-center min-w-[138px] font-bold">
                    {FormatUtils.formatMoney(data?.balance || 0)} {data?.currency}
                </div>
            </BlockLoader>
            <BlockLoader className="min-w-[40px] min-h-[24px]" isLoading={isLoading}>
                <LandingCompanyBadge
                    className="min-w-[40px]"
                    brokerCode={
                        data?.landing_company_name === "virtual" || !data?.landing_company_name ? "VRTC" : data?.landing_company_name
                    }
                />
            </BlockLoader>
            <div
                className={clsx("transition-transform ease-in-out", {
                    "rotate-0": showAccountList,
                    "rotate-180": !showAccountList,
                })}
            >
                <ChevronDownIcon />
            </div>
        </div>
    );
};

export default ActiveAccount;
