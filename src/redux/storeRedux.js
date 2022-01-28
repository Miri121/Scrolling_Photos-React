import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import producePhotos from './reducers/reducerPhotos';

//middlewarews
import { getPhotos } from './middleWares/crud1'

const reducer = combineReducers({ producePhotos });

const store = createStore(reducer, applyMiddleware(getPhotos));

store.dispatch({ type: 'GET_PHOTOS' })

window.store = store;
export default store;

