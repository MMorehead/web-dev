import React from "react";
import './index.css';
const TuitListItem = (
    {
        tuit = {
            _id: "123",
            topic: "Web Development",
            postedBy: {
                username: "ReactJS"
            },
            liked: true,
            verified: false,
            handle: "ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            attachments: {
                "video": "unKvMC3Y1kI"
            },
            logo: "../../../images/react-blue.png",
            avatar: "../../../images/react-blue.png",
            stats: {
                comments: 123,
                retuits: 234,
                likes: 345
            }
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
export default TuitListItem;