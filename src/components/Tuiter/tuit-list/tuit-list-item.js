import React, {useState} from "react";
import './index.css';
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit}
    from "../actions/tuits-actions";

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
                likes: 345,
                dislikes: 10
            }
        }
    }) => {
    const dispatch = useDispatch();

    return(
        <div>
            <li className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-2">
                        <img src={tuit.avatar} className="col-8 rounded-circle"/>
                    </div>
                    <div className="col-9">
                        <p className="wd-inline"><strong>{tuit.postedBy?.username}</strong></p>
                        <p className="wd-inline ms-1 wd-fg-color-darkgray">@{tuit.handle}</p>
                        <p> {tuit.tuit} </p>
                        {
                            tuit.attachments && tuit.attachments.image &&
                            <img src={tuit.attachments.image}
                                 className="mt-2 border-4"
                                 style={{width: "100%"}}/>
                        }
                        {
                            tuit.attachments && tuit.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 border-4"
                                    style={{width: "100%"}}
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                        picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        <div className="row mt-2">
                            <TuitStats tuit={tuit}/>
                        </div>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-times fa-pull-right"
                           onClick={() => deleteTuit(dispatch, tuit)}></i>
                    </div>
                </div>
            </li>
        </div>
    );
}
export default TuitListItem;