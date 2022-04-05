import PostSummaryList from "../post-summary-list";
import React from "react";
import './index.css';

const ExploreComponent = () => {
    return(
        <div>
            <div className="col-14 pb-2">
                <div className="wd-search">
                    <input type="search" className="wd-search-bar" id="searchBar" placeholder="Search Twitter"/>
                        <i className="fas fa-search wd-search-icon"></i>
                        <a className="wd-search-bar-display" href="#">
                            <i className="ms-1 fas fa-cog" style={{color: "blue"}} ></i></a>
                </div>
                <ul className="nav mt-2 mb-2 nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item d-none d-sm-none d-md-block">
                        <a className="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
                <div className="card wd-img-container mb-2">
                    <img src="https://i.imgur.com/0n8nfVA.jpg" className="wd-story-img"/>
                    <div className="card-img-overlay">
                        <div className="card-text wd-bottom-left-text">SpaceX's Starship</div>
                    </div>

                </div>
                <PostSummaryList/>
            </div>
        </div>
    );
}
export default ExploreComponent;
