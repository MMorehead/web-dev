import WhoToFollowListItem from "./who-to-follow-list-item"
import {useSelector} from "react-redux";
import React from "react";
const WhoToFollowList = () => {
    const who = useSelector((state) => state);
    return (
        <div>
            <h1>Who To Follow!!</h1>
        </div>
    );
}
export default WhoToFollowList;