import { ComponentProps } from "react";
import clsx from "clsx";

type LandingCompanyBadgeProps = {
    brokerCode: string;
};

export const LandingCompanyBadge = ({
    className,
    brokerCode,
    ...props
}: LandingCompanyBadgeProps & ComponentProps<"span">) => {
    return (
        <span
            className={clsx(className, "text-center font-bold text-caption px-200 border-100 rounded-200 uppercase", {
                "border-hidden bg-solid-blue-700 text-solid-slate-50": brokerCode === "VRTC",
                "border-solid border-solid-slate-1000": brokerCode !== "VRTC",
            })}
            {...props}
        >
            {brokerCode}
        </span>
    );
};
