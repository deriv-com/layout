import ChevronDownIcon from "@deriv/quill-icons/basic/chevron-down.svg";
import BellIcon from "@deriv/quill-icons/basic/bell.svg";
import DerivMenu from "@deriv/quill-icons/basic/deriv-menu.svg";
import DerivLogo from "@deriv/quill-icons/branding/deriv-logo.svg";
import DocumentLogo from "@deriv/quill-icons/basic/document.svg";
import DTraderLogo from "@deriv/quill-icons/branding/dtrader-logo.svg";
import ProfileIcon from "@deriv/quill-icons/basic/profile.svg";
import { AccountSwitcherTopNav } from "./account-switcher-top-nav";
import { useAuthData } from "@deriv-com/api-hooks";
import { URLUtils } from "@deriv-com/utils";
import { Link } from "react-router-dom";

export const AppTopNavBar = () => {
    const { activeLoginid } = useAuthData();

    return (
        <nav className="fixed  top-50 left-50 w-full inline-flex h-2400 p-600 border-b-75 border-solid-slate-100 z-30">
            <div className="inline-flex items-center gap-1200">
                <Link to="/" className="inline-flex items-center gap-400">
                    <DerivLogo />
                </Link>
                <Link to="/wallets" className="inline-flex items-center gap-400">
                    <DerivMenu />
                </Link>
                <div className="inline-flex items-center gap-400">
                    <DTraderLogo />
                    <ChevronDownIcon />
                </div>
                <div className="inline-flex items-center gap-400">
                    <DocumentLogo />
                    Reports
                </div>
            </div>
            <div className="inline-flex items-center gap-600 ml-auto">
                {activeLoginid ? (
                    <>
                        <BellIcon />
                        <ProfileIcon />
                        <AccountSwitcherTopNav />
                        <button className="bg-solid-coral-800 text-body-sm text-opacity-white-800 rounded-200 px-800 py-300 font-bold">
                            Manage Funds
                        </button>
                    </>
                ) : (
                    <a
                        href={URLUtils.getOauthURL()}
                        className="bg-solid-coral-800 text-body-sm text-opacity-white-800 rounded-200 px-800 py-300 font-bold"
                    >
                        Login
                    </a>
                )}
            </div>
        </nav>
    );
};
