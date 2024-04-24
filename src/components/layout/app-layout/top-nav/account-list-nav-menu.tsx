import clsx from "clsx";
import { useRef } from "react";
import ChevronDownIcon from "@deriv/quill-icons/basic/chevron-down.svg";
import BlockLoader from "components/loader/block-loader";
import { AccountListNavMenuItem } from "./account-list-nav-menu-item";
import css from "./account-switcher-top-nav.module.css";
import { useUIData } from "hooks/use-ui-data";

import {useAccountList, useAuthData } from "@deriv-com/api-hooks"

export const AccountListNavMenu = () => {
    const menuRef = useRef(null);
    const { activeLoginid, switchAccount } = useAuthData();
    const { data: account_list_data, isLoading } = useAccountList();
    const { showAccountList } = useUIData();

    return (
        <div
            ref={menuRef}
            className={clsx("absolute  bg-[#ffff] top-2400 left-800 w-[320px] mt-400 rounded-400", css["shadow"], {
                "flex flex-col animate-fadeIn": showAccountList,
                hidden: !showAccountList,
            })}
        >
            <div className="font-bold text-body-md p-500 border-solid-slate-100 border-b-75">Deriv Apps accounts</div>
            <div className="flex flex-col px-400 py-200 bg-[#ffff] rounded-b-400">
                <BlockLoader className="w-[304px] h-[64px]" isLoading={isLoading}>
                    {account_list_data?.map(({ loginid, currency, broker, is_virtual }) => (
                        <AccountListNavMenuItem
                            key={`account_list-${loginid}`}
                            loginid={loginid || ""}
                            isActive={loginid === activeLoginid}
                            isVirtual={!!is_virtual}
                            currency={currency}
                            broker={broker}
                            onClick={() => switchAccount(loginid || "")}
                        />
                    ))}
                </BlockLoader>
            </div>
            <div className="inline-flex p-800 border-t-75 border-solid-slate-100">
                <span className="text-[14px]">Looking for CFDs? Go to Trader’s Hub</span>
                <div className="rotate-[270deg] ml-auto">
                    <ChevronDownIcon />
                </div>
            </div>
        </div>
    );
};
