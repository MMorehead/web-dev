import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return (
        <div>
            {posts.map(post => {
            return (<PostSummaryItem post={post}/>);
        })
        }
        </div>

    );
}
export default PostSummaryList;