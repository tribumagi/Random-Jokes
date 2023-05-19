import React from 'react';
import {AppDispatch, fetchJokesTC} from "../../store/store";
import { Button } from "@nextui-org/react";

const UpdateButton = () => {

    const dispatch = AppDispatch();

    return (
        <div>

            <Button onClick={()=>dispatch(fetchJokesTC())}>Update</Button>

        </div>
    );
};

export default UpdateButton;