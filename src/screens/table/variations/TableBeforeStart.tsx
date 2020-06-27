import * as React from "react";
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {PlayerProps} from '../../../components/players/PlayerProps';

export type PlayerPropsBeforeStart =  Pick<PlayerProps, 'name' | 'wind' | 'rotated'>

type IProps = {
    topPlayer: PlayerPropsBeforeStart
    leftPlayer: PlayerPropsBeforeStart
    rightPlayer: PlayerPropsBeforeStart
    bottomPlayer: PlayerPropsBeforeStart
}

function getPlayer(player: PlayerPropsBeforeStart): PlayerProps {
    return {
        ...player,
        inlineWind: false,
        points: undefined,
        pointsMode: undefined,
        winButtonMode: undefined,
        loseButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableBeforeStart extends React.Component<IProps> {
    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer} = this.props;

        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.BEFORE_START}
               showTableNumber={true}
           />
        );
    }
}