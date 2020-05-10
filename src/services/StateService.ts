import signals from 'signals';
import {ScreenType} from "../types/ScreenType";

declare var frame: any;

export class StateService {
    frameInnerHeight: string = 'initial';
    currentScreen: ScreenType = ScreenType.HOME;

    onChange: signals.Signal = new signals.Signal();
    frameHeightChanged: signals.Signal = new signals.Signal();

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
                this.nextScreen();
            }
            if (e.key === 'ArrowLeft') {
                this.prevScreen();
            }
        });

        this.frameInnerHeight = frame.innerHeight;
        frame.onresize = () => {
            this.frameInnerHeight = frame.innerHeight;
            this.frameHeightChanged.dispatch();
        };
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