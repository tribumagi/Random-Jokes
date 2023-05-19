import React, {useEffect} from 'react';

import {fetchJokesTC} from "../../store/store";
import {useSelector} from "react-redux";
import {AppDispatch} from "../../store/store";
import Joke from "./joke/joke";
import s from "./jokes.module.css"

const Jokes = () => {

    const selectJokes = (state)=> state.app.jokes
    const jokes = useSelector(selectJokes)
    const selectFilter = (state) => state.app.filter
    const filter = useSelector(selectFilter)

    const dispatch = AppDispatch();

    useEffect(() => {
        dispatch(fetchJokesTC())
    }, [])


    const showJokes = (filter, jokes) => {
        if (filter==="All") {
            return jokes
        } else {
            return jokes.filter(j => j.category===filter)

        }


    }
    const filteredJokes = showJokes(filter, jokes)

    return (
        <div className={s.jokes}>
            {filteredJokes.map((j) => {
                    return (
                        <Joke key={j.id} joke={j}/>
                    )
                }
            )}
        </div>
    );
};

export default Jokes;