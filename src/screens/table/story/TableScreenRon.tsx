import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerButtonMode} from '../../../types/PlayerEnums';
import {PlayerPropsChombo} from './TableScreenChombo';
import {PlayerPropsBeforeStart} from './TableScreenBeforeStart';

export type PlayerPropsIdle =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'nameWidth' | 'winButtonMode' | 'loseButtonMode' | 'riichiButtonMode'>
const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    nameWidth: undefined,
    winButtonMode: PlayerButtonMode.IDLE,
    loseButtonMode: PlayerButtonMode.DISABLE,
    riichiButtonMode: PlayerButtonMode.IDLE,
} as PlayerPropsIdle;

const leftPlayer = {
    name: "Bla Blabla",
    wind: "南",
    rotated: false,
    nameWidth: 'initial',
    winButtonMode: PlayerButtonMode.PRESSED,
    loseButtonMode: PlayerButtonMode.DISABLE,
    riichiButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsBeforeStart;

const rightPlayer = {
    name: "Test Testov",
    wind: "北",
    rotated: false,
    nameWidth: 'initial',
    winButtonMode: PlayerButtonMode.IDLE,
    loseButtonMode: PlayerButtonMode.DISABLE,
    riichiButtonMode: PlayerButtonMode.IDLE,
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    name: "Super long long long name",
    wind: "西",
    rotated: false,
    nameWidth: undefined,
    winButtonMode: PlayerButtonMode.DISABLE,
    loseButtonMode: PlayerButtonMode.PRESSED,
    riichiButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsBeforeStart;

function getPlayer(player: PlayerPropsChombo): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        points: undefined,
        pointsMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableScreenRon extends React.Component {
    render() {
        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.SELECT_PLAYERS}
               outcomeMode={OutcomeTableMode.RON}
               inlineWind={true}
           />
        );
    }
}