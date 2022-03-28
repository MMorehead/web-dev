import WhoToFollowListItem from "./who-to-follow-list-item"
import {useSelector} from "react-redux";
import React from "react";
const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        // TODO: ADD THE WHO TO FOLLOW TOP THINGY HERE
        <ul className="list-group">
            {
                who.map && who.map(who =>
                <WhoToFollowListItem who={who}/>)
            }
        </ul>
    );
}
export default WhoToFollowList;