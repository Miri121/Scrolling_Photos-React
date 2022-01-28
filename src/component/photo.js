import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Img } from 'react-image'

import './style.css'

function mapStateToProps(state) {
    return {
        urlPhotoo: state.producePhotos.urlPhoto,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Photo(props) {
    const { urlPhotoo } = props
    return (
        <>
            {/* <div className='div1'> */}
                {urlPhotoo ? <Img className='photo1' src={urlPhotoo}></Img> : null}
            {/* </div> */}
        </>
    );
}))
