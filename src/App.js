import React from 'react';
import { PostContext} from './reducer/notes';

import './App.css';


const App = () => {
    const [state, dispatch] = React.useContext(PostContext);
    const {number1, number2, result1, result2 } = state;

    const handleChange = e => {
        const { value, name } = e.target;

        if (name === 'number1')
            dispatch({ type: "number1", number1: value });

        if (name === 'number2')
            dispatch({ type: "number2", number2: value });
    }

    return (
        <div className="container">
            <h1>Les auteurs :</h1>
        <ul >
        <li className="pad">
            <div>
                <div><h2>Alan</h2></div>
                <p>Passion : React, JS, MongoDB</p>
                <div className="inputs">
                    Note : <input className="form-control" type="text" name="number1" value={number1} onChange={handleChange} />
                    <button className="btn btn-secondary" onClick={() => dispatch({ type: "evaluer1" })}>Evaluer Alan !</button>
                </div>
                <p>Resultat : {result1}</p>
            </div>
        </li>
        <li className="pad">
            <div>
                <div><h2>Alice</h2></div>
                <p>Passion : HTML5, CSS, JS</p>
                <div className="inputs">
                    Note : <input className="form-control" type="text" name="number2" value={number2} onChange={handleChange} />
                    <button className="btn btn-secondary" onClick={() => dispatch({ type: "evaluer2" })}>Evaluer Alice !</button>
                </div>
                <p>Resultat : {result2}</p>
            </div>
        </li>
        </ul>
        </div>
    )
}

export default App;