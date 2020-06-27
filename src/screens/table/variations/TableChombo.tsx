import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';

export type PlayerPropsChombo =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'loseButtonMode'>

type IProps = {
    topPlayer: PlayerPropsChombo
    leftPlayer: PlayerPropsChombo
    rightPlayer: PlayerPropsChombo
    bottomPlayer: PlayerPropsChombo
}

function getPlayer(player: PlayerPropsChombo): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        points: undefined,
        pointsMode: undefined,
        winButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableChombo extends React.Component<IProps> {
    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer} = this.props;

        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.SELECT_PLAYERS}
               outcomeMode={OutcomeTableMode.CHOMBO}
               inlineWind={true}
           />
        );
    }
}