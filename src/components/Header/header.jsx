import React from 'react';
import s from "./header.module.css"
import UpdateButton from "../updateButton/updateButton";
import {AppDispatch, filterJokesAC} from "../../store/store";

const Header = () => {

    const dispatch = AppDispatch();

    const arr = ["All","Misc","Programming","Dark","Pun","Spooky"]

    const onChange = (event) => {
        const value = event.target.value;
        dispatch(filterJokesAC(value));

    };

    return (
        <div className={s.header}>
            <>10 Random jokes</>


            <select name="jokes" id="jokes-select" onChange={onChange}>
                {arr.map( (value) => <option value={value}>{value}</option>)}


            </select>

            <UpdateButton/>

        </div>
    );
};

export default Header;