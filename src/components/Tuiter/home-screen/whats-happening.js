import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
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
                                setWhatsHappening(event.target.value)}>
                  </textarea>
                    <hr />
                    <i className="fas fa-image wd-tuit-icon"></i>
                    <i className="fas fa-chart-line wd-tuit-icon"></i>
                    <i className="fas fa-grin wd-tuit-icon"></i>
                    <i className="fas fa-calendar wd-tuit-icon"></i>
                    <button onClick={tuitClickHandler} className="wd-tuit-btn rounded-pill border-0">
                        Tuit
                    </button>
                </div>
        </div>
    );
}
export default WhatsHappening;