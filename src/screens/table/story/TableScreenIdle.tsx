import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerPointsMode} from '../../../types/PlayerEnums';
import {PlayerPropsChombo} from './TableScreenChombo';
import {PlayerPropsBeforeStart} from './TableScreenBeforeStart';
import {getBottomPlayerBase, getLeftPlayerBase, getRightPlayerBase, getTopPlayerBase} from '../TableScreenExamples';

export type PlayerPropsIdle =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'nameWidth' | 'points' | 'pointsMode' | 'penaltyPoints'>
const topPlayer = {
    ...getTopPlayerBase(),
    points: 21600,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: 22500,
} as PlayerPropsIdle;

const leftPlayer = {
    ...getLeftPlayerBase(),
    points: 54100,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsBeforeStart;

const rightPlayer = {
    ...getRightPlayerBase(),
    points: 32800,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    ...getBottomPlayerBase(),
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

export class TableScreenIdle extends React.Component {
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
           />
        );
    }
}