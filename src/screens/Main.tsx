import * as React from 'react'
import '../components/components.less'
import {StateService} from '../services/StateService'
import {ScreenType} from '../types/ScreenType'
import { SettingsScreen } from './settings/SettingsScreen'
import { TableBeforeStart } from './table/variations/TableBeforeStart'
import {TableChombo} from './table/variations/TableChombo';
import {GameResultScreen} from './game-result/GameResultScreen';
import { NewGameScreen } from './new-game/NewGameScreen'
import {SearchPlayerScreen} from './new-game/SearchPlayerScreen';
import {OtherPlayingTablesScreen} from './other-tables/OtherPlayingTablesScreen';
import {LoginErrorScreen} from './login/LoginErrorScreen';
import {HomeScreen} from './home/HomeScreen';
import {LogScreenExample} from './log/story/LogScreenExample';
import {SelectYakuScreenExample} from './select-hand/story/SelectYakuScreenExample';
import {SelectHandScreenExample} from './select-hand/story/SelectHandScreenExample';
import {EnterPinScreen} from './login/EnterPinScreen';

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
        this.stateService.prevScreen();
    }

    render() {
        const {currentScreen} = this.state;
        return (
            <div id="screen" className="App theme-night" onClick={this.onAppClicked.bind(this)}>
                {currentScreen === ScreenType.SETTINGS && (
                    <SettingsScreen />
                )}
                {/*{currentScreen === ScreenType.BEFORE_START && (*/}
                {/*    <TableBeforeStart />*/}
                {/*)}*/}
                {/*{currentScreen === ScreenType.TABLE && (*/}
                {/*    <TableIdle />*/}
                {/*)}*/}
                {/*{currentScreen === ScreenType.TABLE_SELECT_OUTCOME && (*/}
                {/*    <TableSelect />*/}
                {/*)}*/}
                {/*{currentScreen === ScreenType.TABLE_RON && (*/}
                {/*    <TableRon />*/}
                {/*)}*/}
                {/*{currentScreen === ScreenType.TABLE_DRAW && (*/}
                {/*    <TableExhaustiveDraw />*/}
                {/*)}*/}
                {/*{currentScreen === ScreenType.TABLE_RESULT && (*/}
                {/*    <TableResult />*/}
                {/*)}*/}
                {/*{currentScreen === ScreenType.CHOMBO && (*/}
                {/*    <TableChombo />*/}
                {/*)}*/}
                {currentScreen === ScreenType.GAME_RESULT && (
                    <GameResultScreen />
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
                {currentScreen === ScreenType.LOGIN && (
                    <EnterPinScreen />
                )}
                {currentScreen === ScreenType.LOGIN_ERROR && (
                    <LoginErrorScreen />
                )}
                {currentScreen === ScreenType.HOME && (
                    <HomeScreen />
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