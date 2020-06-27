import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {getTableInfoBase} from '../TableScreenExamples';
import {TableInfoProps} from '../base/TableInfoProps';
import {PlayerPropsChombo} from './TableChombo';

export type PlayerPropsRon =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'winButtonMode' | 'loseButtonMode' | 'riichiButtonMode'>

type IProps = {
    topPlayer: PlayerPropsRon
    leftPlayer: PlayerPropsRon
    rightPlayer: PlayerPropsRon
    bottomPlayer: PlayerPropsRon
    tableInfo: TableInfoProps
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
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer, tableInfo} = this.props;

        return (
            <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.SELECT_PLAYERS}
               outcomeMode={OutcomeTableMode.RON}
               tableInfo={tableInfo}
           />
        );
    }
}