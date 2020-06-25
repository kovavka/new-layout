import * as React from 'react';
import {PlayerButtonMode, PlayerPointsMode} from '../../types/PlayerEnums';
import {TableMode} from '../../types/TableMode';
import {OutcomeTableMode} from '../../types/OutcomeTypes';
import './base/page-table.less'
import {TableInfoProps} from './base/TableInfoProps';
import {PlayerProps} from '../../components/players/PlayerProps';
import {TableScreenStateless} from './base/TableScreenStateless';

type IProps = {
    tableMode: TableMode
    outcomeMode?: OutcomeTableMode

    topPlayer: PlayerProps
    leftPlayer: PlayerProps
    rightPlayer: PlayerProps
    bottomPlayer: PlayerProps

    showPoints?: boolean
    inlineWind?: boolean
    showArrows?: boolean
    selectOutcome?: boolean

    showRoundInfo?: boolean
    showTableNumber?: boolean
    showTimer?: boolean
    gamesLeft?: number
}

//todo move to general state and HOC
type IState = {
    rotatedNameHeight: string
}

export class TableScreen extends React.Component<IProps, IState> {
    state = {
        rotatedNameHeight: 'initial'
    };

    componentDidMount(): void {
        this.onFrameHeightChanged();
        // StateService.instance.frameHeightChanged.add(this.onFrameHeightChanged, this);
    }

    componentWillUnmount(): void {
        // StateService.instance.frameHeightChanged.remove(this.onFrameHeightChanged, this);
    }

    onFrameHeightChanged() {
        this.setState({
            rotatedNameHeight: document.querySelector('.page-table__center')!.clientHeight + 'px'
        });
    }

    getBottomPanel() {
        const {tableMode, outcomeMode} = this.props;

        let text = outcomeMode;
        let showBack = tableMode === TableMode.SELECT_PLAYERS || tableMode ===  TableMode.RESULT;
        let showNext = tableMode === TableMode.SELECT_PLAYERS;
        let isNextDisabled = true;
        let showSave = tableMode === TableMode.RESULT;
        let isSaveDisabled = true;

        let showHome = [TableMode.GAME, TableMode.BEFORE_START, TableMode.OTHER_PLAYER_TABLE].includes(tableMode);
        let showRefresh = [TableMode.GAME, TableMode.BEFORE_START, TableMode.OTHER_PLAYER_TABLE].includes(tableMode);
        let showAdd = tableMode === TableMode.GAME;
        let showLog = [TableMode.GAME, TableMode.OTHER_PLAYER_TABLE].includes(tableMode);

        return {
            text: text,
            showBack: showBack,
            showNext: showNext,
            isNextDisabled: isNextDisabled,
            showHome: showHome,
            showRefresh: showRefresh,
            showAdd: showAdd,
            showLog: showLog,
            showSave: showSave,
            isSaveDisabled: isSaveDisabled,
        };
    }

    getTableInfo() {
        const {showRoundInfo, showTableNumber, showTimer, gamesLeft} = this.props;
        return {
            showRoundInfo: showRoundInfo,
            showTableNumber: showTableNumber,
            showTimer: showTimer,
            gamesLeft: gamesLeft,
            round: '東 1',
            riichiCount: 1,
            honbaCount: 2,
            currentTime: '47:25',
            tableNumber: 4,
        } as TableInfoProps;
    }

    render() {
        const {topPlayer, leftPlayer, rightPlayer, bottomPlayer, selectOutcome, showArrows} = this.props;

        return (
            <>
               <TableScreenStateless
                   topPlayer={topPlayer}
                   leftPlayer={leftPlayer}
                   rightPlayer={rightPlayer}
                   bottomPlayer={bottomPlayer}
                   tableInfo={this.getTableInfo()}
                   bottomPanel={this.getBottomPanel()}
                   showOutcomeModal={selectOutcome}
                   showArrows={showArrows}
               />
           </>
        );
    }
}