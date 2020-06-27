import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {TableInfoProps} from '../base/TableInfoProps';

export type PlayerPropsResult =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'points' | 'pointsMode' | 'showInlineRiichi'>

type IProps = {
    topPlayer: PlayerPropsResult
    leftPlayer: PlayerPropsResult
    rightPlayer: PlayerPropsResult
    bottomPlayer: PlayerPropsResult
    tableInfo: TableInfoProps
}

function getPlayer(player: PlayerPropsResult): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        winButtonMode: undefined,
        loseButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableResult extends React.Component<IProps> {
    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer, tableInfo} = this.props;

        return (
            <TableScreen
                topPlayer={getPlayer(topPlayer)}
                leftPlayer={getPlayer(leftPlayer)}
                rightPlayer={getPlayer(rightPlayer)}
                bottomPlayer={getPlayer(bottomPlayer)}
                tableMode={TableMode.RESULT}
                outcomeMode={OutcomeTableMode.RON}
                tableInfo={tableInfo}
                arrows={{}}
            />
        );
    }
}