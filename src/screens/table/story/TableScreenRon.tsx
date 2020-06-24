import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {getPlayerTop} from '../TableScreenExamples';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerButtonMode} from '../../../types/PlayerEnums';

const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    inlineWind: true,
    points: undefined,
    pointsMode: undefined,
    winButtonMode: PlayerButtonMode.IDLE,
    loseButtonMode: PlayerButtonMode.DISABLE,
    riichiButtonMode: PlayerButtonMode.IDLE,
    showDeadButton: false,
    penaltyPoints: undefined,
} as PlayerProps;

const topPlayer1 = getPlayerTop(true, false, TableMode.BEFORE_START, OutcomeTableMode.RON);
export class TableScreenRon extends React.Component {
    render() {
        return (
           <TableScreen topPlayer={topPlayer} tableMode={TableMode.SELECT_PLAYERS} outcomeMode={OutcomeTableMode.RON} inlineWind={true} />
        );
    }
}