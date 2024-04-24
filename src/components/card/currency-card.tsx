import AUDCard from "@deriv/quill-icons/currency/aud-card.svg";
import BTCCard from "@deriv/quill-icons/currency/btc-card.svg";
import ETHCard from "@deriv/quill-icons/currency/eth-card.svg";
import LTCCard from "@deriv/quill-icons/currency/ltc-card.svg";
import USDCard from "@deriv/quill-icons/currency/usd-card.svg";
import USDCCard from "@deriv/quill-icons/currency/usdc-card.svg";
import USDTCard from "@deriv/quill-icons/currency/usdt-card.svg";
import VirtualCard from "@deriv/quill-icons/currency/virtual-card.svg";
import clsx from "clsx";
import { ComponentProps } from "react";

const Currencies = {
    AUD: AUDCard,
    BTC: BTCCard,
    ETH: ETHCard,
    LTC: LTCCard,
    USD: USDCard,
    USDC: USDCCard,
    eUSDT: USDTCard,
    VRTCUSD: VirtualCard,
} as const;

export type Currency = keyof typeof Currencies;

type CurrencyCardProps = {
    currency: Currency;
};

export const CurrencyCard = ({ currency, className, ...props }: CurrencyCardProps & ComponentProps<"div">) => {
    const Icon = Currencies[currency];
    if (!Icon) return null;

    return (
        <div className={clsx(className, "")} {...props}>
            <Icon />
        </div>
    );
};
