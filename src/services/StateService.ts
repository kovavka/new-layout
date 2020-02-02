import signals from 'signals';
import {ScreenType} from "../types/ScreenType";

export class StateService {
    currentScreen: ScreenType = ScreenType.TABLE_RON;
    maxScreen = 3;

    onChange: signals.Signal = new signals.Signal();

    private static _instance: StateService;
    static get instance(): StateService {
        if (!this._instance) {
            this._instance = new StateService();
        }
        return this._instance;
    }

    private constructor() {
    }

    nextScreen() {
        if (this.currentScreen !== this.maxScreen) {
            this.currentScreen++;
            this.onChange.dispatch();
        }
    }

    prevScreen() {
        if (this.currentScreen !== 0) {
            this.currentScreen--;
            this.onChange.dispatch();
        }
    }
}