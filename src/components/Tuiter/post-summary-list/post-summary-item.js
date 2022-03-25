import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "./images/react.png"
        }
    }) => {
    return (
        <div>
            <li className="list-group-item list-group-item-action ">
                <div className="row ps-2 pt-2 pb-2 wd-shift-right">
                    <div className="col-9">
                        <p className="wd-color-gray mb-0">{post.topic}</p>
                        <p className="wd-inline"><strong>{post.userName}</strong></p>
                        <i className="fas fa-check-circle wd-inline"></i>
                        <p className="wd-inline wd-color-gray"> - {post.time}</p>
                        <p><strong>{post.title}</strong></p>
                    </div>
                    <div className="col-2 mx-auto mt-auto mb-auto">
                        <img src={post.image} className="img-fluid rounded"/>
                    </div>
                </div>
            </li>
        </div>
    );
}
export default PostSummaryItem;