import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <>
            <div className="col">
                <i className="far fa-comment me-1"></i>
                {tuit.stats?.comments}
            </div>
            <div className="col">
                <i className="fas fa-retweet me-1"></i>
                {tuit.stats?.retuits}
            </div>
            <div className="col">
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    stats: {
                        likes: tuit.stats.likes + 1,
                        dislikes: tuit.stats.dislikes,
                        retuits: tuit.stats.retuits,
                        comments: tuit.stats.comments
                    }
                })} className="far fa-thumbs-up ms-2"></i>
                {tuit.stats?.likes}
            </div>
            <div className="col">
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    stats: {
                        dislikes: tuit.stats.dislikes + 1,
                        likes: tuit.stats.likes,
                        retuits: tuit.stats.retuits,
                        comments: tuit.stats.comments
                    }
                })} className="far fa-thumbs-down ms-2"></i>
                {tuit.stats?.dislikes}
            </div>
            {/*<span className="col" onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats?.likes}
            </span>*/}
            <div className="col">
                <i className="fas fa-external-link-alt me-1" ></i>
            </div>
        </>

);
}
export default TuitStats;