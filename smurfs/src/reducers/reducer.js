import { GET_VILLAGE, UPDATE_VILLAGE, SET_ERROR, NEW_SMURF,UPDATE_NEW_VILLAGE } from '../actions'


const initialState = {
    smurfs: [],
    isFetchingData: false,
    error: ''
}

export const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case GET_VILLAGE:
            return {
                ...state,
                smurfs: [],
                isFetchingData:true,
            }
        case UPDATE_VILLAGE:
            return {
                ...state, 
                smurfs: action.payload,
                isFetchingData:false,
            }
        case UPDATE_NEW_VILLAGE:
            return{
                ...state,
                smurfs:[...state.smurfs, action.payload]
            }
        
        case SET_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}