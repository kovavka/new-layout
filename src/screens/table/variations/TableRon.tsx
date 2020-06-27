import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';

export type PlayerPropsRon =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'winButtonMode' | 'loseButtonMode' | 'riichiButtonMode'>

type IProps = {
    topPlayer: PlayerPropsRon
    leftPlayer: PlayerPropsRon
    rightPlayer: PlayerPropsRon
    bottomPlayer: PlayerPropsRon
}

function getPlayer(player: PlayerPropsRon): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        points: undefined,
        pointsMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableRon extends React.Component<IProps> {
    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer} = this.props;

        return (
            <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.SELECT_PLAYERS}
               outcomeMode={OutcomeTableMode.RON}
               inlineWind={true}
           />
        );
    }
}