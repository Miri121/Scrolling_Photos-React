import { actions } from "../actions/createAction"



export const getPhotos = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_PHOTOS') {
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=aabca25d8cd75f676d3a74a72dcebf21&format=json&nojsoncallback=1`
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            mode: 'cors'
        }).then((res) => res.json()).then((result) => {
            // console.log(result.photos.photo)
             dispatch(actions.setArrPhotos(result.photos.photo))
        }).catch((error) => {
            alert(error)
        })
    }
    return next(action);
}

























// export const getPhotos = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'GET_PHOTOS') {
//         const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=aabca25d8cd75f676d3a74a72dcebf21`
//         return fetch(url, {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json',
//             },
//             mode: 'cors'
//         }).then((res) => res.json()).then((result) => {
//             console.log(result)
//             dispatch(actions.setArrPhotos(result))
//         }).catch((error) => {
//             alert(error)
//         })
//     }
//     return next(action);
// }


