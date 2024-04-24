import clsx from "clsx";
import { ComponentProps } from "react";

type BlockLoaderProps = {
    isLoading: boolean;
};

const BlockLoader = ({ className, children, isLoading }: BlockLoaderProps & ComponentProps<"div">) => {
    if (isLoading) {
        return <div className={clsx(className, "bg-solid-slate-100 animate-loading rounded-200")} />;
    }
    return children;
};

export default BlockLoader;
