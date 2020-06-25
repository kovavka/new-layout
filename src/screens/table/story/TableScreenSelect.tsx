import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerPointsMode} from '../../../types/PlayerEnums';
import {PlayerPropsChombo} from './TableScreenChombo';
import {PlayerPropsBeforeStart} from './TableScreenBeforeStart';

export type PlayerPropsIdle =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'nameWidth' | 'points' | 'pointsMode' | 'penaltyPoints'>
const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    nameWidth: undefined,
    points: 21600,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: 22500,
} as PlayerPropsIdle;

const leftPlayer = {
    name: "Bla Blabla",
    wind: "南",
    rotated: false,
    nameWidth: 'initial',
    points: 54100,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsBeforeStart;

const rightPlayer = {
    name: "Test Testov",
    wind: "北",
    rotated: false,
    nameWidth: 'initial',
    points: 32800,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    name: "Super long long long name",
    wind: "西",
    rotated: false,
    nameWidth: undefined,
    points: 10500,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsBeforeStart;

function getPlayer(player: PlayerPropsChombo): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        winButtonMode: undefined,
        loseButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
    }
}

export class TableScreenSelect extends React.Component {
    render() {
        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.GAME}
               showRoundInfo={true}
               showTimer={true}
               inlineWind={true}
               showPoints={true}
               selectOutcome={true}
           />
        );
    }
}