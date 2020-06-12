import * as React from 'react'
import '../components/components.less'
import {StateService} from '../services/StateService'
import {ScreenType} from '../types/ScreenType'
import { SettingsScreen } from './settings/SettingsScreen'
import { TableScreenBeforeStart } from './examples/TableScreenBeforeStart'
import {TableScreenIdle} from './examples/TableScreenIdle';
import {TableScreenRon} from './examples/TableScreenRon';
import {TableScreenExhaustiveDraw} from './examples/TableScreenExhaustiveDraw';
import {TableScreenChombo} from './examples/TableScreenChombo';
import {GameResultScreen} from './game-result/GameResultScreen';
import { NewGameScreen } from './new-game/NewGameScreen'
import {SearchPlayerScreen} from './new-game/SearchPlayerScreen';
import {OtherPlayingTablesScreen} from './other-tables/OtherPlayingTablesScreen';
import {LoginErrorScreen} from './login/LoginErrorScreen';
import {TableScreenResult} from "./examples/TableScreenResult";
import {HomeScreenExample} from './examples/HomeScreenExample';
import {TableScreenSelect} from './examples/TableScreenSelect';
import {LogScreenExample} from './examples/LogScreenExample';
import {SelectYakuScreenExample} from './examples/SelectYakuScreenExample';
import {SelectHandScreenExample} from './examples/SelectHandScreenExample';

type MainState = {
    currentScreen: ScreenType;
}

export class Main extends React.Component<any, MainState> {
    stateService: StateService = StateService.instance;

    constructor(props: any) {
        super(props);

        this.state = {
            currentScreen: this.stateService.currentScreen
        }
    }

    componentDidMount(): void {
        this.stateService.onChange.add(this.updateState, this);
    }

    componentWillUnmount(): void {
        this.stateService.onChange.remove(this.updateState, this);
    }

    updateState() {
        this.setState({
            currentScreen: this.stateService.currentScreen
        });
    }

    onAppClicked() {
        // this.stateService.prevScreen();
    }

    render() {
        const {currentScreen} = this.state;
        return (
            <div className="App" onClick={this.onAppClicked.bind(this)}>
                {currentScreen === ScreenType.SETTINGS && (
                    <SettingsScreen />
                )}
                {currentScreen === ScreenType.BEFORE_START && (
                    <TableScreenBeforeStart />
                )}
                {currentScreen === ScreenType.TABLE && (
                    <TableScreenIdle />
                )}
                {currentScreen === ScreenType.TABLE_SELECT_OUTCOME && (
                    <TableScreenSelect />
                )}
                {currentScreen === ScreenType.TABLE_RON && (
                    <TableScreenRon />
                )}
                {currentScreen === ScreenType.TABLE_DRAW && (
                    <TableScreenExhaustiveDraw />
                )}
                {currentScreen === ScreenType.TABLE_RESULT && (
                    <TableScreenResult />
                )}
                {currentScreen === ScreenType.CHOMBO && (
                    <TableScreenChombo />
                )}
                {currentScreen === ScreenType.GAME_RESULT && (
                    <GameResultScreen showRepeatButton={true} />
                )}
                {currentScreen === ScreenType.NEW_GAME && (
                    <NewGameScreen />
                )}
                {currentScreen === ScreenType.SEARCH_PLAYER && (
                    <SearchPlayerScreen />
                )}
                {currentScreen === ScreenType.OTHER_PLAYINGS_TABLES && (
                    <OtherPlayingTablesScreen />
                )}
                {currentScreen === ScreenType.LOGIN_ERROR && (
                    <LoginErrorScreen />
                )}
                {currentScreen === ScreenType.HOME && (
                    <HomeScreenExample />
                )}
                {currentScreen === ScreenType.LOG && (
                    <LogScreenExample />
                )}
                {currentScreen === ScreenType.SELECT_YAKU && (
                    <SelectYakuScreenExample />
                )}
                {currentScreen === ScreenType.SELECT_TOTAL && (
                    <SelectHandScreenExample />
                )}
            </div>
        )
    }
}