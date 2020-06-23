import * as React from "react";
import './page-game-result.less'
import {GameResultScreenStateless} from './GameResultScreenStateless';

const player1 = {
    name: 'Random player 1',
    score: 21600,
    delta: -13400,
};
const player2 = {
    name: 'Super long long long name',
    score: 10500,
    delta: -34500,
};
const player3 = {
    name: 'Test Testov',
    score: 33800,
    delta: 8800,
};
const player4 = {
    name: 'Bla Blablah',
    score: 54100,
    delta: 39100,
};
const players = [player1, player2, player3, player4];

export class GameResultScreen extends React.Component {
    render() {
        return (
            <GameResultScreenStateless players={players} showRepeatButton={false}  />
        );
    }
}