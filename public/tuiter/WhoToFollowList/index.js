import WhoToFollowListItem from "./ListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group wd-who-to-follow">
            <li class="list-group-item list-group-item-action">
                        Who to follow
             </li>
           
            ${who.map(who => {
                return (WhoToFollowListItem(who));
            }).join("")
            }
        </ul>
    `);
}
export default WhoToFollowList;