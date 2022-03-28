import WhoToFollowListItem from "./who-to-follow-list-item"
import {useSelector} from "react-redux";
import React from "react";
const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <strong>Who To Follow</strong>
            </li>
            {
                who.map && who.map(who =>
                <WhoToFollowListItem who={who}/>)
            }
        </ul>
    );
}
export default WhoToFollowList;