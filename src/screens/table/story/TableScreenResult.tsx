import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerPointsMode} from '../../../types/PlayerEnums';
import {PlayerPropsChombo} from './TableScreenChombo';
import {PlayerPropsBeforeStart} from './TableScreenBeforeStart';

export type PlayerPropsIdle =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'nameWidth' | 'points' | 'pointsMode'>
const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    nameWidth: undefined,
    points: 3000,
    pointsMode: PlayerPointsMode.NEGATIVE,
} as PlayerPropsIdle;

const leftPlayer = {
    name: "Bla Blabla",
    wind: "南",
    rotated: false,
    nameWidth: 'initial',
    points: 3000,
    pointsMode: PlayerPointsMode.POSITIVE,
} as PlayerPropsBeforeStart;

const rightPlayer = {
    name: "Test Testov",
    wind: "北",
    rotated: false,
    nameWidth: 'initial',
    points: 0,
    pointsMode: PlayerPointsMode.IDLE,
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    name: "Super long long long name",
    wind: "西",
    rotated: false,
    nameWidth: undefined,
    points: 0,
    pointsMode: PlayerPointsMode.IDLE,
} as PlayerPropsBeforeStart;

function getPlayer(player: PlayerPropsChombo): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        winButtonMode: undefined,
        loseButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableScreenResult extends React.Component {
    render() {
        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.RESULT}
               outcomeMode={OutcomeTableMode.RON}
               inlineWind={true}
               showPoints={true}
               showArrows={true}
           />
        );
    }
}