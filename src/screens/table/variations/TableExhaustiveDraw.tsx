import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';

export type PlayerPropsExhaustiveDraw =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'winButtonMode' | 'riichiButtonMode' | 'showDeadButton'>

type IProps = {
    topPlayer: PlayerPropsExhaustiveDraw
    leftPlayer: PlayerPropsExhaustiveDraw
    rightPlayer: PlayerPropsExhaustiveDraw
    bottomPlayer: PlayerPropsExhaustiveDraw
}

function getPlayer(player: PlayerPropsExhaustiveDraw): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        points: undefined,
        pointsMode: undefined,
        loseButtonMode: undefined,
        penaltyPoints: undefined,
    }
}

export class TableExhaustiveDraw extends React.Component<IProps> {
    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer} = this.props;

        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.SELECT_PLAYERS}
               outcomeMode={OutcomeTableMode.EXHAUSTIVE_DRAW}
               inlineWind={true}
           />
        );
    }
}