import * as React from 'react'
import './screen.less'
import '../components/components.less'
import {StateService} from '../services/StateService'
import {ScreenType} from '../types/ScreenType'
import { SettingsScreen } from './settings/SettingsScreen'
import { TableScreenBeforeStart } from './examples/TableScreenBeforeStart'
import {TableScreenIdle} from './examples/TableScreenIdle';
import {TableScreenRon} from './examples/TableScreenRon';

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
                {currentScreen === ScreenType.TABLE_RON && (
                    <TableScreenRon />
                )}
            </div>
        )
    }
}