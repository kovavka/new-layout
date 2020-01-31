import signals from 'signals';
import {ScreenType} from "../types/ScreenType";

export class StateService {

    currentScreen: ScreenType = ScreenType.TABLE

    onChange: signals.Signal = new signals.Signal()

    private static _instance: StateService
    static get instance(): StateService {
        if (!this._instance) {
            this._instance = new StateService()
        }
        return this._instance
    }

    private constructor() {}

    nextScreen() {
        this.currentScreen++
        this.onChange.dispatch()
    }
}