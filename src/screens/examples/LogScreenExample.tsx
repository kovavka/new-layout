import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";
import { Switch } from "../../components/switch/Switch";
import {classNames} from '../../services/ReactUtils';
import {OutcomeType} from '../../types/OutcomeTypes';
import {LogScreen} from '../log/LogScreen';


const round1 = {
    winners: [],
    losers: [],
    tempaiPlayers: [1],
    paoPlayer: undefined,
    delta: [3000, -1000, -1000, -1000],
    result: [33000, 29000, 29000, 29000],
    outcome: OutcomeType.EXHAUSTIVE_DRAW,
    prevHonba: 0,
    prevRiichi: 0,
    riichiPlayers: [],
    winnerHans: [],
    wind: '東1'
};

const round2 = {
    winners: [],
    losers: [],
    tempaiPlayers: [1,4],
    paoPlayer: undefined,
    delta: [1500, -1500, -1500, 500],
    result: [34500, 27500, 27500, 29500],
    outcome: OutcomeType.EXHAUSTIVE_DRAW,
    prevHonba: 1,
    prevRiichi: 0,
    riichiPlayers: [4],
    winnerHans: [],
    wind: '東1'
};
const round3 = {
    winners: [3],
    losers: [2],
    tempaiPlayers: [],
    paoPlayer: undefined,
    delta: [0, -12600, 13600, 0],
    result: [34500, 14900, 41100, 29500],
    outcome: OutcomeType.RON,
    prevHonba: 2,
    prevRiichi: 1,
    riichiPlayers: [3],
    winnerHans: [
        {
            han: 6,
            fu: 40,
            yaku: ['Riichi, Pinfu, Ippatsu'],
            dora: 3,
        }
    ],
    wind: '東1'
};
const round4 = {
    winners: [1],
    losers: [4],
    tempaiPlayers: [],
    paoPlayer: undefined,
    delta: [7700, 0, 0, -7700],
    result: [42200, 14900, 41100, 21800],
    outcome: OutcomeType.RON,
    prevHonba: 0,
    prevRiichi: 0,
    riichiPlayers: [],
    winnerHans: [
        {
            han: 6,
            fu: 40,
            yaku: ['Riichi, Pinfu, Ippatsu'],
            dora: 3,
        }
    ],
    wind: '東2'
};


const rounds = [round1, round2, round3, round4];

const players = [
    {
        id: 1,
        name: 'Bla Blablah'
    },
    {
        id: 2,
        name: 'Super long long long name'
    },
    {
        id: 3,
        name: 'Test Testov'
    },
    {
        id: 4,
        name: 'Random player 1'
    },
];

export class LogScreenExample extends React.Component<{}> {

    render() {
        return <LogScreen rounds={rounds} players={players} />;
    }
}