import React from "react";

function Popup(props){
    return (props.trigger) ?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn " onClick={()=> props.setTrigger(false)}> {/*to close the popup*/}
                close
                </button>
                <h3>Share movies to your Contacts!</h3>
                <p>list</p>
            </div>
        </div>
    ) : "";

}

export default Popup;