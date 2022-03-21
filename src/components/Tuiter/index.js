import React from "react";

import {Link} from "react-router-dom";
import NavigationSidebar from "../Tuiter/NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore-screen/explore-component";
import ExploreScreen from "./explore-screen";

const Tuiter = () => {
    return(
        <>
            <ExploreScreen/>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                Labs
            </Link>
        </>
    )
};

export default Tuiter;
