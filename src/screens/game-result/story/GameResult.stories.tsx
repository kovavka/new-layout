import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {GameResultScreenStateless} from '../GameResultScreenStateless';
import {boolean, number, text} from '@storybook/addon-knobs';


const player1 = () => {
    return {
        name: text('name', 'Random player 1'),
        score: number('score', 21600),
        delta: number('delta', -13400),
    };
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
const players = () => [player1(), player2, player3, player4];

ScreenStories.add(
    'game result',
    () => (
        <GameResultScreenStateless players={players()} showRepeatButton={boolean('showRepeatButton', false)}  />
    )
);
