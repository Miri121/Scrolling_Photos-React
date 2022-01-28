import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/actions/createAction'
import { withRouter } from "react-router-dom";
import { Img } from 'react-image'
import './style.css';

function mapStateToProps(state) {
    return {
        arrPhotoss: state.producePhotos.arrPhotos
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUrlPhotoo: (n) => dispatch(actions.setUrlPhoto(n)),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Photos(props) {
    const { arrPhotoss, setUrlPhotoo } = props
    const { history } = props;
    function clickImg(photoUrl_s) {
        setUrlPhotoo(photoUrl_s)
        history.push('/photo')

    }
    useEffect(function startComponent() {
        return function close() {
        }
    }, [])
    return (
        <>
            <div>
                <ul>
                    {arrPhotoss.map((item) => (
                        <div className='div1' key={item.id}>
                            {item.url_s ? <Img className='image' key={item.id} src={item.url_s} onClick={(e) => { clickImg(item.url_s) }}></Img> : null}
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
}))