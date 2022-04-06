import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div className="row mb-2">
                <div className="col-2">
                    <img src="https://i.imgur.com/eRgGBho.png" className="w-75 rounded-circle"/>
                </div>

                <div className="col-10">
                  <textarea className="wd-whats-happening" value={whatsHappening}
                            placeholder="What's happening?"
                            onChange={(event) =>
                                setWhatsHappening(event.target.value)}
                            onChange={(e) => {
                                setNewTuit({
                                    ...newTuit,
                                    tuit: e.target.value,
                                    stats: {
                                        likes: 0,
                                        dislikes: 0,
                                    },
                                    topic: "Web Development",
                                    postedBy: {
                                        username: "ReactJS"
                                    },
                                    handle: "ReactJS",
                                    logo: "https://i.imgur.com/eRgGBho.png",
                                    avatar: "https://i.imgur.com/eRgGBho.png"
                                })
                                setWhatsHappening(e.target.value)}}>
                  </textarea>
                    <hr />
                    <i className="fas fa-image wd-tuit-icon"></i>
                    <i className="fas fa-chart-line wd-tuit-icon"></i>
                    <i className="fas fa-grin wd-tuit-icon"></i>
                    <i className="fas fa-calendar wd-tuit-icon"></i>
                    <button onClick={() => createTuit(dispatch, newTuit)} className="wd-tuit-btn rounded-pill border-0">
                        Tuit
                    </button>
                </div>
        </div>
    );
}
export default WhatsHappening;