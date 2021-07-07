import axios from 'axios'

export const GET_VILLAGE = 'GET_VILLAGE'
export const UPDATE_VILLAGE = 'ADD_TO_VILLAGE'
export const SET_ERROR = 'SET_ERROR'
export const NEW_SMURF = 'NEW_SMURF'
export const UPDATE_NEW_VILLAGE = 'UPDATE_NEW_VILLAGE'

export const getData = () => dispatch => {
    dispatch({type: GET_VILLAGE})
    axios
        .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch({type:UPDATE_VILLAGE, payload: res.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: SET_ERROR, payload: 'Error finding smurfs'})
            })
}

export const newSmurf = (newVillager) => dispatch => {
    dispatch({type: NEW_SMURF})
    axios
        .post('http://localhost:3333/smurfs', newVillager)
            .then(res => {
                console.log(res)
                dispatch({type:UPDATE_NEW_VILLAGE, payload: newVillager})
            })
            .catch(err => {
                console.log(err)
            })
}