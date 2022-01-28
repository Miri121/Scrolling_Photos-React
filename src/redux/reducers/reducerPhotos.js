import produce from 'immer';
import { createReducer } from './ReducerUtils'

const initialState = {
    arrPhotos: [],
    urlPhoto:''
}
const photo = {
    setArrPhotos(state, action) {
        state.arrPhotos=action.payLoad;
    },
    setUrlPhoto(state, action) {
        state.urlPhoto=action.payLoad;
    },

}
export default produce((state, action) => createReducer(state, action, photo), initialState);







