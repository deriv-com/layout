import { useRef } from "react";
import { AccountListNavMenu } from "./account-list-nav-menu";
import ActiveAccount from "./active-account";
import { useUIData } from "hooks/use-ui-data";
import { useOnClickOutside } from "usehooks-ts";

export const AccountSwitcherTopNav = () => {
    const menuRef = useRef(null);
    const { setShowAccountList } = useUIData();

    useOnClickOutside(menuRef, () => setShowAccountList(false));

    return (
        <div ref={menuRef} className="relative">
            <ActiveAccount />
            <AccountListNavMenu />
        </div>
    );
};
