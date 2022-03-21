import React from "react";
import './index.css';
const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: './images/NASA_logo.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    return(
        <div>
            <li className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-2">
                        <img src={who.avatarIcon} className="rounded-circle wd-follow-image"/>
                    </div>
                    <div className="col-6 col-lg-5 ms-3">
                        <p className="wd-inline"><strong>{who.userName}</strong></p>
                        <i className="fas fa-check-circle"></i>
                        <p className="">@{who.handle}</p>
                    </div>
                    <div className="col-3 mt-1">
                        <button className="btn btn-primary rounded-pill wd-vertical-align">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
}
export default WhoToFollowListItem;