import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerButtonMode} from '../../../types/PlayerEnums';
import {PlayerPropsBeforeStart} from './TableScreenBeforeStart';

export type PlayerPropsChombo =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'nameWidth' | 'loseButtonMode'>

const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    nameWidth: undefined,
    loseButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsChombo;

const leftPlayer = {
    name: "Bla Blabla",
    wind: "南",
    rotated: false,
    nameWidth: 'initial',
    loseButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsBeforeStart;

const rightPlayer = {
    name: "Test Testov",
    wind: "北",
    rotated: false,
    nameWidth: 'initial',
    loseButtonMode: PlayerButtonMode.IDLE,
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    name: "Super long long long name",
    wind: "西",
    rotated: false,
    nameWidth: undefined,
    loseButtonMode: PlayerButtonMode.IDLE,
} as PlayerPropsBeforeStart;

function getPlayer(player: PlayerPropsChombo): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        points: undefined,
        pointsMode: undefined,
        winButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableScreenChombo extends React.Component {
    render() {
        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.SELECT_PLAYERS}
               outcomeMode={OutcomeTableMode.CHOMBO}
               inlineWind={true}
           />
        );
    }
}