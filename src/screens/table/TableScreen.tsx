import * as React from 'react';
import {PlayerButtonMode, PlayerPointsMode} from '../../types/PlayerEnums';
import {TableMode} from '../../types/TableMode';
import {OutcomeTableMode} from '../../types/OutcomeTypes';
import './base/page-table.less'
import {TableScreenStateless} from './base/TableScreenStateless';
import {TableInfoProps} from './base/TableInfoProps';
import {PlayerProps} from '../../components/players/PlayerProps';

type IProps = {
    tableMode: TableMode
    outcomeMode?: OutcomeTableMode

    topPlayer: PlayerProps

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

    getPlayerLeft() {
        const {inlineWind, showPoints, tableMode, outcomeMode} = this.props;
        const {rotatedNameHeight} = this.state;
        let points = showPoints ? 54100 : undefined;
        let pointsMode = showPoints ? PlayerPointsMode.IDLE : undefined;

        //todo move to HOC
        let winButtonMode: PlayerButtonMode | undefined;
        let loseButtonMode: PlayerButtonMode | undefined;
        let riichiButtonMode: PlayerButtonMode | undefined;
        let showDeadButton: boolean | undefined;
        let showInlineRiichi = tableMode === TableMode.RESULT;

        if (tableMode && tableMode !== TableMode.RESULT && outcomeMode !== undefined) {
            switch (outcomeMode) {
                case OutcomeTableMode.RON:
                    winButtonMode = PlayerButtonMode.PRESSED;
                    loseButtonMode = PlayerButtonMode.DISABLE;
                    riichiButtonMode = PlayerButtonMode.PRESSED;
                    break;
                case OutcomeTableMode.TSUMO:
                    winButtonMode = PlayerButtonMode.IDLE;
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.CHOMBO:
                    loseButtonMode = PlayerButtonMode.PRESSED;
                    break;
                case OutcomeTableMode.NAGASHI:
                    winButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.NAGASHI_TEMPAI:
                case OutcomeTableMode.EXHAUSTIVE_DRAW:
                    riichiButtonMode = PlayerButtonMode.PRESSED;
                    showDeadButton = true;
                    break;
                case OutcomeTableMode.ABORTIVE_DRAW:
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.PAO:
                    loseButtonMode = PlayerButtonMode.IDLE;
                    break;
            }
        }

        return {
            name: "Bla Blabla",
            wind: "南",
            nameWidth: rotatedNameHeight,
            inlineWind: inlineWind,
            points: points,
            pointsMode: pointsMode,
            winButtonMode: winButtonMode,
            loseButtonMode: loseButtonMode,
            riichiButtonMode: riichiButtonMode,
            showDeadButton: showDeadButton,
        };
    }

    getPlayerRight() {
        const {inlineWind, showPoints, tableMode, outcomeMode} = this.props;
        const {rotatedNameHeight} = this.state;
        let points = showPoints ? 32800 : undefined;
        let pointsMode = showPoints ? PlayerPointsMode.IDLE : undefined;

        //todo move to HOC
        let winButtonMode: PlayerButtonMode | undefined;
        let loseButtonMode: PlayerButtonMode | undefined;
        let riichiButtonMode: PlayerButtonMode | undefined;
        let showDeadButton: boolean | undefined;

        if (tableMode && tableMode !== TableMode.RESULT && outcomeMode !== undefined) {
            switch (outcomeMode) {
                case OutcomeTableMode.RON:
                    winButtonMode = PlayerButtonMode.IDLE;
                    loseButtonMode = PlayerButtonMode.DISABLE;
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.TSUMO:
                    winButtonMode = PlayerButtonMode.IDLE;
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.CHOMBO:
                    loseButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.NAGASHI:
                    winButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.NAGASHI_TEMPAI:
                case OutcomeTableMode.EXHAUSTIVE_DRAW:
                    winButtonMode = PlayerButtonMode.PRESSED;
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    showDeadButton = false;
                    break;
                case OutcomeTableMode.ABORTIVE_DRAW:
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.PAO:
                    loseButtonMode = PlayerButtonMode.IDLE;
                    break;
            }
        }

        return {
            name: "Test Testov",
            wind: "北",
            nameWidth: rotatedNameHeight,
            inlineWind: inlineWind,
            points: points,
            pointsMode: pointsMode,
            winButtonMode: winButtonMode,
            loseButtonMode: loseButtonMode,
            riichiButtonMode: riichiButtonMode,
            showDeadButton: showDeadButton,
        };
    }

    getPlayerBottom() {
        const {inlineWind, showPoints, tableMode, outcomeMode} = this.props;
        let points = showPoints ? 10500 : undefined;
        let pointsMode = showPoints ? PlayerPointsMode.IDLE : undefined;

        //todo move to HOC
        let winButtonMode: PlayerButtonMode | undefined;
        let loseButtonMode: PlayerButtonMode | undefined;
        let riichiButtonMode: PlayerButtonMode | undefined;
        let showDeadButton: boolean | undefined;

        if (tableMode && tableMode !== TableMode.RESULT && outcomeMode !== undefined) {
            switch (outcomeMode) {
                case OutcomeTableMode.RON:
                    winButtonMode = PlayerButtonMode.DISABLE;
                    loseButtonMode = PlayerButtonMode.PRESSED;
                    riichiButtonMode = PlayerButtonMode.PRESSED;
                    break;
                case OutcomeTableMode.TSUMO:
                    winButtonMode = PlayerButtonMode.IDLE;
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.CHOMBO:
                    loseButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.NAGASHI:
                    winButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.NAGASHI_TEMPAI:
                case OutcomeTableMode.EXHAUSTIVE_DRAW:
                    winButtonMode = PlayerButtonMode.IDLE;
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    showDeadButton = false;
                    break;
                case OutcomeTableMode.ABORTIVE_DRAW:
                    riichiButtonMode = PlayerButtonMode.IDLE;
                    break;
                case OutcomeTableMode.PAO:
                    loseButtonMode = PlayerButtonMode.IDLE;
                    break;
            }
        }

        return {
            name: "Super long long long name",
            wind: "西",
            inlineWind: inlineWind,
            points: points,
            pointsMode: pointsMode,
            winButtonMode: winButtonMode,
            loseButtonMode: loseButtonMode,
            riichiButtonMode: riichiButtonMode,
            showDeadButton: showDeadButton,
        };
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
        const {topPlayer, selectOutcome, showArrows} = this.props;

        return (
            <>
               <TableScreenStateless
                   topPlayer={topPlayer}
                   leftPlayer={this.getPlayerLeft()}
                   bottomPlayer={this.getPlayerBottom()}
                   rightPlayer={this.getPlayerRight()}
                   tableInfo={this.getTableInfo()}
                   bottomPanel={this.getBottomPanel()}
                   showOutcomeModal={selectOutcome}
                   showArrows={showArrows}
               />
           </>
        );
    }
}