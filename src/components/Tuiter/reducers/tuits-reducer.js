import {DELETE_TUIT, FIND_ALL_TUITS, CREATE_TUIT, UPDATE_TUIT}
    from "../actions/tuits-actions";

const tuitsReducer =
    (state = [], action) => {
        switch (action.type) {
            case FIND_ALL_TUITS:
                return action.tuits;
            case UPDATE_TUIT:
                return state.map(
                    tuit => tuit._id === action.tuit._id ?
                        action.tuit : tuit);
            /*case 'like-tuit':
                return state.map(tuit => {
                    if(tuit._id === action.tuit._id) {
                        if(tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                });*/
            case DELETE_TUIT:
                return state.filter(
                    tuit => tuit._id !== action.tuit._id);
            case CREATE_TUIT:
                return [
                    ...state,
                    action.newTuit
                ];
            /*case 'create-tuit':
                const newTuit = {
                    tuit: action.tuit,
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        "username": "ReactJS"
                    },
                    handle: "ReactJS",
                    logo: "https://i.imgur.com/eRgGBho.png",
                    avatar: "https://i.imgur.com/eRgGBho.png",
                    stats: {
                        retuits: 111,
                        likes: 222,
                        comments: 333
                    }
                }
                return [
                    newTuit,
                    ...state,
                ];*/
            default:
                return state
        }
    }


export default tuitsReducer;