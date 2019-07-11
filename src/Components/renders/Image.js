import React from "react";


function Image(props){
    return(
        <div>
            <embed src={props.url} />
        </div>
    );
}
export default Image;

