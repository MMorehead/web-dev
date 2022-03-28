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
        <div className="row">
                {/*<img src="./images/spaceX.jpeg" className="w-75 rounded-circle col-8"/>*/}

                <div className="col-6 wd-inline">
                  <textarea value={whatsHappening}
                            onChange={(event) =>
                                setWhatsHappening(event.target.value)}>
                  </textarea>
                    <button onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
        </div>
    );
}
export default WhatsHappening;