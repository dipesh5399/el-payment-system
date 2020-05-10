import React from 'react'

 const Loader = (props) => {
    return (
        <div>
            <button  onClick={props.onLoadClick}>{props.loadingStatus ? "isLoading: true" : "isLoading: false"}</button>
        </div>
    )
}
export default Loader;