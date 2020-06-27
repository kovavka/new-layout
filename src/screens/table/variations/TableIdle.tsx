import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {TableInfoProps} from '../base/TableInfoProps';

export type PlayerPropsIdle =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'points' | 'pointsMode' | 'penaltyPoints'>

type IProps = {
    topPlayer: PlayerPropsIdle
    leftPlayer: PlayerPropsIdle
    rightPlayer: PlayerPropsIdle
    bottomPlayer: PlayerPropsIdle
    tableInfo: TableInfoProps
}

function getPlayer(player: PlayerPropsIdle): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        winButtonMode: undefined,
        loseButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
    }
}

export class TableIdle extends React.Component<IProps> {
    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer, tableInfo} = this.props;

        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.GAME}
               tableInfo={tableInfo}
           />
        );
    }
}