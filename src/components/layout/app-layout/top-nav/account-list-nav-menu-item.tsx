import clsx from "clsx";
import DerivAccountSwitcher from "@deriv/quill-icons/branding/deriv-apps.svg";
import { Currency, CurrencyCard } from "components/card/currency-card";
import { ComponentProps } from "react";
import { LandingCompanyBadge } from "components/badge/landing-company-badge";
import { useBalance } from "@deriv-com/api-hooks";
import { FormatUtils } from "@deriv-com/utils";
import BlockLoader from "components/loader/block-loader";

type AccountListNavMenuItemProps = {
    loginid: string;
    isActive: boolean;
    isVirtual?: boolean;
    currency?: string;
    broker?: string;
};

export const AccountListNavMenuItem = ({
    className,
    isActive,
    isVirtual,
    loginid,
    currency,
    broker,
    ...props
}: AccountListNavMenuItemProps & ComponentProps<"div">) => {
    const { data: balanceData, isLoading } = useBalance();
    const formattedBalance = FormatUtils.formatMoney(balanceData?.accounts?.[loginid]?.balance || 0);

    return (
        <div
            className={clsx(
                className,
                "inline-flex items-center h-3200 gap-800 px-800 rounded-200 cursor-pointer hover:bg-solid-slate-100 ease-in-out",
                {
                    "bg-solid-slate-100": isActive,
                    "bg-[#fff]": !isActive,
                }
            )}
            {...props}
        >
            <div className="relative w-3200 h-2000">
                <div className="absolute top-100 left-100">
                    <DerivAccountSwitcher />
                </div>
                <CurrencyCard
                    currency={isVirtual ? "VRTCUSD" : (currency as Currency)}
                    className="absolute w-[40px] bottom-100 right-100"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-[12px] leading-[14px]">Deriv Apps</span>
                <span className="text-[12px] leading-[14px]">{currency} Wallet</span>
                <BlockLoader isLoading={isLoading} className="min-w-[100px] min-h-[14px]">
                    <span className="font-bold text-[14px] leading-[20px]">
                        {formattedBalance} {currency}
                    </span>
                </BlockLoader>
            </div>
            <LandingCompanyBadge className="ml-auto" brokerCode={broker || "VRTC"} />
        </div>
    );
};
