import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {getPlayerTop} from '../TableScreenExamples';
import {PlayerButtonMode} from '../../../types/PlayerEnums';
import {PlayerProps} from '../../../components/players/PlayerProps';

const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    inlineWind: true,
    points: undefined,
    pointsMode: undefined,
    winButtonMode: undefined,
    loseButtonMode: undefined,
    riichiButtonMode: PlayerButtonMode.PRESSED,
    showDeadButton: true,
    penaltyPoints: undefined,
} as PlayerProps;

const topPlayer1 = getPlayerTop(true, false, TableMode.SELECT_PLAYERS, OutcomeTableMode.EXHAUSTIVE_DRAW);
export class TableScreenExhaustiveDraw extends React.Component {
    render() {
        return (
           <TableScreen topPlayer={topPlayer} tableMode={TableMode.SELECT_PLAYERS} outcomeMode={OutcomeTableMode.EXHAUSTIVE_DRAW} inlineWind={true} />
        );
    }
}