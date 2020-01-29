import * as React from 'react'
import './screen.less'
import '../components/components.less'
import {StateService} from '../services/StateService'
import {ScreenType} from '../types/ScreenType'
import { SettingsScreen } from './Settings/SettingsScreen'

type MainState = {
    currentScreen: ScreenType
}

export class Main extends React.Component<any, MainState> {
    stateService: StateService = StateService.instance

    constructor(props: any) {
        super(props)

        this.state = {
            currentScreen: this.stateService.currentScreen
        }
    }

    componentDidMount(): void {
        this.stateService.onChange.add(this.updateState, this)
    }

    componentWillUnmount(): void {
        this.stateService.onChange.remove(this.updateState, this)
    }

    updateState() {
        this.setState({
            currentScreen: this.stateService.currentScreen
        })
    }

    render() {
        const {currentScreen} = this.state
        return (
            <div className="App">
                {currentScreen === ScreenType.SETTINGS && (
                    <SettingsScreen />
                )}
            </div>
        )
    }
}