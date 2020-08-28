
import { createContext } from 'react';

export const PostContext = createContext({});

export const initialState = {
    posts: [],
    note:'',
    number1: '',
    number2: '',
    result1: 0,
    result2: 0
};


export const reducer = (state, action) => {
    switch (action.type) {

        // charger les posts au lancement de l'application
        case 'INIT':

            return { ...state, posts: action.posts }

        case "note":

            return {
                ...state, note: action.note
            };

            case "number1":
                return {
                    ...state, number1: action.number1
                };

            case "number2":
                return {
                    ...state, number2: action.number2
                };

            case "evaluer1":

            return {
                ...state,
                number1: '',
                result1: Number(state.number1)
            }

            case "evaluer2":

            return {
                ...state,
                number2: '',
                result2: Number(state.number2)
            }    

        default:
            return state;
    }
}