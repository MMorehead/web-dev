const NavigationSidebar = () => {
    return(`
            <div class="list-group">
               <a class="list-group-item list-group-item-action" href="/">
                    <i class="fab fa-twitter"></i></a>
                
                <a class="list-group-item list-group-item-action" href="home.html">
                    <i class="fas fa-home"></i>
                    <p class="d-none d-xl-inline d-xxl-inline">Home</p></a>
                <a href="explore.html" class="list-group-item list-group-item-action active">
                        <i class="fas fa-hashtag"></i>
                        <p class="d-none d-xl-inline d-xxl-inline">Explore</p></a>
                       <a href="notifications.html" class="list-group-item list-group-item-action">
                        <i class="fas fa-bell"></i>
                        <p class="d-none d-xl-inline d-xxl-inline">Notifications</p>
                    </a>
                    <a href="messages.html" class="list-group-item list-group-item-action">
                        <i class="fas fa-envelope"></i>
                        <p class="d-none d-xl-inline d-xxl-inline">Messages</p>
                    </a>
                    <a href="bookmarks.html" class="list-group-item list-group-item-action">
                        <i class="fas fa-bookmark"></i>
                        <p class="d-none d-xl-inline d-xxl-inline">Bookmarks</p>
                    </a>
                    <a href="lists.html" class="list-group-item list-group-item-action">
                        <i class="fas fa-list"></i>
                        <p class="d-none d-xl-inline d-xxl-inline">Lists</p>
                    </a>
                    <a href="profile.html" class="list-group-item list-group-item-action">
                        <i class="fas fa-user"></i>
                        <p class="d-none d-xl-inline d-xxl-inline">Profile</p>
                    </a>
                    <a href="more.html" class="list-group-item list-group-item-action wd-padding-left">
                        <span class="fa-stack fa-1x ">
                            <i class="fas fa-circle fa-stack-1x"></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse fa-xs" style="color: gray"></i>
                            <p class="wd-more-display d-none d-xl-inline d-xxl-inline">More</p>
                        </span>
                    </a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
