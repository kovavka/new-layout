import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerButtonMode} from '../../../types/PlayerEnums';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerPropsChombo} from './TableScreenChombo';
import {PlayerPropsBeforeStart} from './TableScreenBeforeStart';

export type PlayerPropsExhaustiveDraw =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'nameWidth' | 'winButtonMode' | 'riichiButtonMode' | 'showDeadButton'>
const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    nameWidth: undefined,
    winButtonMode: undefined,
    riichiButtonMode: PlayerButtonMode.PRESSED,
    showDeadButton: true,
} as PlayerPropsExhaustiveDraw;

const leftPlayer = {
    name: "Bla Blabla",
    wind: "南",
    rotated: false,
    nameWidth: 'initial',
    winButtonMode: undefined,
    riichiButtonMode: PlayerButtonMode.PRESSED,
    showDeadButton: true,
} as PlayerPropsBeforeStart;

const rightPlayer = {
    name: "Test Testov",
    wind: "北",
    rotated: false,
    nameWidth: 'initial',
    winButtonMode: PlayerButtonMode.PRESSED,
    riichiButtonMode: PlayerButtonMode.IDLE,
    showDeadButton: false,
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    name: "Super long long long name",
    wind: "西",
    rotated: false,
    nameWidth: undefined,
    winButtonMode: PlayerButtonMode.IDLE,
    riichiButtonMode: PlayerButtonMode.IDLE,
    showDeadButton: false,
} as PlayerPropsBeforeStart;

function getPlayer(player: PlayerPropsChombo): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        points: undefined,
        pointsMode: undefined,
        loseButtonMode: undefined,
        penaltyPoints: undefined,
    }
}

export class TableScreenExhaustiveDraw extends React.Component {
    render() {
        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.SELECT_PLAYERS}
               outcomeMode={OutcomeTableMode.EXHAUSTIVE_DRAW}
               inlineWind={true}
           />
        );
    }
}