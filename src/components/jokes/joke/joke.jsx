import React from 'react';
import {Container, Row, Col, Card, Text} from '@nextui-org/react';
import {FC} from "react";
import s from "./joke.module.css"

const Joke: FC = ({joke}) => {

    // const dispatch = AppDispatch();
    //
    // const deleteJoke = () => {
    //     dispatch(deleteJokeAC(joke.id))
    // }



    return (
        <Container xl className={s.joke}>
            <Card css={{ $$cardColor: '$colors$primary' }} >
                <Card.Body>
                    <Row justify="center" align="center">
                        <Text h6 size={15} color="white" css={{ m: 0 }}>
                            {joke.joke}
                        </Text>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Joke;