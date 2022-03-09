
const WhoToFollowListItem = (who) => {
    return(`
     <li class="list-group-item list-group-item-action">
        <div class="row">
             <div class="col-2">
            <img src=${who.avatarIcon} class="rounded-circle wd-follow-image">
        </div>
        <div class="col-6 col-lg-5 ms-3">
            <p class="wd-inline"><strong>${who.userName}</strong></p>
            <i class="fas fa-check-circle"></i>
            <p class="">${who.handle}</p>
        </div>
        <div class="col-3 mt-1">
           <button class="btn btn-primary rounded-pill wd-vertical-align">
              Follow </button>
        </div>
        </div>
       
     </li>
    `);
}
export default WhoToFollowListItem;