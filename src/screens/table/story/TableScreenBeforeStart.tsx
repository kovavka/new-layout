import * as React from "react";
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {getPlayerTop} from '../TableScreenExamples';
import {PlayerProps} from '../../../components/players/PlayerProps';

const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    inlineWind: false,
    points: undefined,
    pointsMode: undefined,
    winButtonMode: undefined,
    loseButtonMode: undefined,
    riichiButtonMode: undefined,
    showDeadButton: false,
    penaltyPoints: undefined,
} as PlayerProps;

const topPlayer1 = getPlayerTop(false, false, TableMode.BEFORE_START, undefined);

export class TableScreenBeforeStart extends React.Component {
    render() {
        return (
           <TableScreen topPlayer={topPlayer} tableMode={TableMode.BEFORE_START} showTableNumber={true} />
        );
    }
}