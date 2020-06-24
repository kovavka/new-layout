import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {getPlayerTop} from '../TableScreenExamples';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerPointsMode} from '../../../types/PlayerEnums';

const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    inlineWind: true,
    points: 21600,
    pointsMode: PlayerPointsMode.IDLE,
    winButtonMode: undefined,
    loseButtonMode: undefined,
    riichiButtonMode: undefined,
    showDeadButton: false,
    penaltyPoints: 22500,
} as PlayerProps;

const topPlayer1 = getPlayerTop(true, true, TableMode.GAME, undefined);
export class TableScreenSelect extends React.Component {
    render() {
        return (
           <TableScreen topPlayer={topPlayer} tableMode={TableMode.GAME} showRoundInfo={true} showTimer={true} inlineWind={true} showPoints={true} selectOutcome={true}/>
        );
    }
}