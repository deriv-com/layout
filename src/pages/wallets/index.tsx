// import { useState } from "react";
import {useWebsiteStatus} from '@deriv-com/api-hooks'

const WalletsIndexPage = () => {
    const {data} = useWebsiteStatus();
    console.log(data);
    // const [data, setData] = useState<TSocketResponseData<"website_status">>();

    // const { clients_country = "" } = data?.website_status || {};

    const handleUpdateWebsiteStatus = async () => {
        // const something = await derivApi.send("website_status", { website_status: 1 });
        // setData(something);
    };

    return (
        <div className="flex flex-col">
            <div className="">WebSocket Request Testing</div>
            <div className="">
                test
                {/* {clients_country === "" ? <div>No data</div> : <div className="">{clients_country}</div>} */}
            </div>
            <button
                className="bg-solid-red-900 text-solid-red-100 rounded-200 py-200"
                onClick={() => handleUpdateWebsiteStatus()}
            >
                Update
            </button>
        </div>
    );
};

export default WalletsIndexPage;
