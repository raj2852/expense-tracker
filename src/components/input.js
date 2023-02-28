import React from "react";
import images from "../images";

const InputArea = () => {
    return(
        <div className="input">
            <input type="text" placeholder="Enter your expense detail" style={{width:"60%"}}/>
            <button className="confirm"  style={{borderWidth: 0,borderColor: "transparent", backgroundColor:"green",borderRadius:12}}><img src={images.confirm} alt="confirm"/></button>
            <button className="delete"  style={{borderWidth: 0,borderColor: "transparent", backgroundColor:"red",borderRadius:12}}><img src={images.delete} alt="delete"/></button>
        </div>
    )
}

export default InputArea;