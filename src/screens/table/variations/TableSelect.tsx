import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {getTableInfoBase} from '../TableScreenExamples';
import {TableInfoProps} from '../base/TableInfoProps';
import {PlayerPropsIdle} from './TableIdle';

export type PlayerPropsSelect =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'points' | 'pointsMode' | 'penaltyPoints'>

type IProps = {
    topPlayer: PlayerPropsSelect
    leftPlayer: PlayerPropsSelect
    rightPlayer: PlayerPropsSelect
    bottomPlayer: PlayerPropsSelect
    tableInfo: TableInfoProps
}

function getPlayer(player: PlayerPropsSelect): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        winButtonMode: undefined,
        loseButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
    }
}

export class TableSelect extends React.Component<IProps> {
    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer, tableInfo} = this.props;

        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.GAME}
               selectOutcome={true}
               tableInfo={tableInfo}
           />
        );
    }
}