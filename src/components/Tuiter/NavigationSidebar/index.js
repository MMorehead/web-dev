import React from "react";
import './index.css';
const NavigationSidebar = ({ active = 'explore'}) => {
    return(
        <div>
            <div className="list-group">
               <a className="list-group-item list-group-item-action" href="/">
                    <i className="fab fa-twitter"></i></a>
                <a className={`list-group-item list-group-item-action
                            ${active === 'home' ? 'active' : ''}`} href="home.html">
                    <i className="fas fa-home"></i>
                    <p className="d-none d-xl-inline d-xxl-inline ps-2">Home</p></a>
                <a href="explore.html" className={`list-group-item list-group-item-action
                            ${active === 'explore' ? 'active' : ''}`}>
                        <i className="fas fa-hashtag"></i>
                        <p className="d-none d-xl-inline d-xxl-inline ps-2">Explore</p></a>
                <a href="notifications.html" className={`list-group-item list-group-item-action
                            ${active === 'notifications' ? 'active' : ''}`}>
                        <i className="fas fa-bell"></i>
                        <p className="d-none d-xl-inline d-xxl-inline ps-2">Notifications</p></a>
                <a href="messages.html" className={`list-group-item list-group-item-action
                            ${active === 'messages' ? 'active' : ''}`}>
                        <i className="fas fa-envelope"></i>
                        <p className="d-none d-xl-inline d-xxl-inline ps-2">Messages</p></a>
                <a href="bookmarks.html" className={`list-group-item list-group-item-action
                            ${active === 'bookmarks' ? 'active' : ''}`}>
                        <i className="fas fa-bookmark"></i>
                        <p className="d-none d-xl-inline d-xxl-inline ps-2">Bookmarks</p></a>
                <a href="lists.html" className={`list-group-item list-group-item-action
                            ${active === 'lists' ? 'active' : ''}`}>
                        <i className="fas fa-list"></i>
                        <p className="d-none d-xl-inline d-xxl-inline ps-2">Lists</p></a>
                <a href="profile.html" className={`list-group-item list-group-item-action
                            ${active === 'profile' ? 'active' : ''}`}>
                        <i className="fas fa-user"></i>
                        <p className="d-none d-xl-inline d-xxl-inline ps-2">Profile</p></a>
                <a href="more.html" className={`list-group-item list-group-item-action ps-1
                            ${active === 'more' ? 'active' : ''}`}>
                        <span className="fa-stack fa-1x">
                            <i className="fas fa-circle fa-stack-1x"></i>
                            <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse fa-xs" style={{color: "gray"}}></i>
                            <p className="wd-more-display d-none d-xl-inline d-xxl-inline ps-1">More</p>
                        </span>
                    </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
