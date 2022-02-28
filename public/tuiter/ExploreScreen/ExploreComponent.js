import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="col-14 pb-2">
                <div class="wd-search">
                    <input type="search" class="wd-search-bar" id="searchBar" placeholder="Search Twitter">
                 <i class="fas fa-search wd-search-icon"></i>
                 <a class="wd-search-bar-display" href="#"><i class="fas fa-cog" style="color: blue" ></i></a>
                </div>
                
               <ul class="nav mt-2 mb-2 nav-tabs">
                         <li class="nav-item">
                            <a class="nav-link active" href="for-you.html">For You</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
               </ul>
               <!-- image with overlaid text -->
               <div class="wd-img-container">
                        <img src="../images/spaceX.jpeg" class="wd-story-img">
                        <div class="wd-bottom-left-text">SpaceX's Starship</div>
                    </div>
               ${PostSummaryList()}
    `);
}
export default ExploreComponent;
