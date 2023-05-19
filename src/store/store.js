import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {useDispatch} from "react-redux";
import {API} from "../api/api";
//import {appReducer} from "./reducer";

export const AppDispatch = () => useDispatch()

const initialState= {jokes:[],filter:'All'}

const appReducer = (state = initialState, action)=> {
    switch (action.type) {
        case "SET-JOKES" :
            return {...state, jokes: action.jokes}
        case "DELETE-JOKE" :
            return {...state, jokes: state.jokes.filter(c => c.id !== action.id)}
        case "FILTER-JOKE" :
            return {...state, filter: action.filter}
        default:
            return state
    }
}



const rootState = combineReducers({app: appReducer})

export const store = legacy_createStore(rootState, applyMiddleware(thunk));




export const setJokesAC = (jokes) => ({type: "SET-JOKES", jokes})
export const deleteJokeAC = (id) => ({type: "DELETE-JOKE", id})
export const filterJokesAC = (filter) => ({type: "FILTER-JOKE", filter})


export const fetchJokesTC = () =>
    async dispatch => {
        const res = await API.getJokes()
        dispatch(setJokesAC(res.data.jokes))
    }





