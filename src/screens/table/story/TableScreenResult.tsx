import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {getPlayerTop} from '../TableScreenExamples';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerPointsMode} from '../../../types/PlayerEnums';

const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    inlineWind: true,
    points: 3000,
    pointsMode: PlayerPointsMode.NEGATIVE,
    winButtonMode: undefined,
    loseButtonMode: undefined,
    riichiButtonMode: undefined,
    showDeadButton: false,
    penaltyPoints: undefined,
} as PlayerProps;

const topPlayer1 = getPlayerTop(true, true, TableMode.RESULT, undefined);
export class TableScreenResult extends React.Component {
    render() {
        return (
           <TableScreen topPlayer={topPlayer} tableMode={TableMode.RESULT} outcomeMode={OutcomeTableMode.RON} inlineWind={true} showPoints={true} showArrows={true} />
        );
    }
}