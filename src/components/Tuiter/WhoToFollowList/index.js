import WhoToFollowListItem from "./who-to-follow-list-item"
import who from "./who.json"
import React from "react";
const WhoToFollowList = () => {
    return (
        <div>
            <ul className="list-group wd-who-to-follow">
                <li className="list-group-item list-group-item-action">
                    Who to follow
                </li>

                {who.map(who => {
                return (<WhoToFollowListItem who={who}/>);
                })
            }
            </ul>
        </div>
    );
}
export default WhoToFollowList;