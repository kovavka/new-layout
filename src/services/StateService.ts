import signals from 'signals';
import {ScreenType} from "../types/ScreenType";

export class StateService {
    currentScreen: ScreenType = ScreenType.OTHER_PLAYINGS_TABLES;

    onChange: signals.Signal = new signals.Signal();

    private static _instance: StateService;
    static get instance(): StateService {
        if (!this._instance) {
            this._instance = new StateService();
        }
        return this._instance;
    }

    private constructor() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.nextScreen()
            }
            if (e.key === 'ArrowLeft') {
                this.prevScreen()
            }
        })
    }

    nextScreen() {
        this.currentScreen++;
        this.onChange.dispatch();
    }

    prevScreen() {
        if (this.currentScreen !== 0) {
            this.currentScreen--;
            this.onChange.dispatch();
        }
    }
}