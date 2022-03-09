const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item list-group-item-action ">
            <div class="row ps-2 pt-2 pb-2 wd-shift-right">
                    <div class="col-9">
                        <p class="wd-color-gray mb-0">${post.topic}</p>
                        <p class="wd-inline"><strong>${post.userName}</strong></p>
                        <i class="fas fa-check-circle wd-inline"></i>
                        <p class="wd-inline wd-color-gray"> - ${post.time}</p>
                        <p><strong>${post.title}</strong></p>
                    </div>
                    <div class="col-2 mx-auto mt-auto mb-auto">
                        <img src=${post.image} class="img-fluid rounded">
                    </div>
                </div>
        </li>
           
    `);
}
export default PostSummaryItem;