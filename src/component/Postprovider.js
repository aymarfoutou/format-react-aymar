import React from 'react';
import { PostContext} from '../reducer/notes';


const Postprovider = ({ children }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        dispatch({ type: 'INIT', posts: [
            { id: 1, auteur: "Alan", passion:"React, JS, MongoDB" }, 
            { id: 2, auteur: "Alice", passion:"HTML5, CSS, JS" },

            ] })
    }, []);

    return (
        <PostContext.Provider value={[state, dispatch]}>
            {children}
        </PostContext.Provider>
    )
}

export default Postprovider;