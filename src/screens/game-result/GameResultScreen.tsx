import * as React from "react";
import {StateService} from '../../services/StateService'
import { TopPanel } from "../../components/top-panel/TopPanel";
import { Switch } from "../../components/switch/Switch";

type IProps = {
    showRepeatButton?: boolean
}

export class GameResultScreen extends React.Component<IProps> {
    render() {
        const {showRepeatButton} = this.props;

        return (
            <div className="page-game-result">
                <div className="page-game-result__players">
                    <div className="player-result">
                        <div className="player-result__name">
                            Random player 1
                        </div>
                        <div className="player-result__score-container">
                            <div className="player-result__score">
                                21600
                            </div>
                            <div className="player-result__delta player-result__delta--danger">
                                -13400
                            </div>
                        </div>
                    </div>
                    <div className="player-result">
                        <div className="player-result__name">
                            Super long long long name
                        </div>
                        <div className="player-result__score-container">
                            <div className="player-result__score">
                                10500
                            </div>
                            <div className="player-result__delta player-result__delta--danger">
                                -34500
                            </div>
                        </div>
                    </div>
                    <div className="player-result">
                        <div className="player-result__name">
                            Test Testov
                        </div>
                        <div className="player-result__score-container">
                            <div className="player-result__score">
                                33800
                            </div>
                            <div className="player-result__delta player-result__delta--success">
                                +8800
                            </div>
                        </div>
                    </div>
                    <div className="player-result">
                        <div className="player-result__name">
                            Bla Blablah
                        </div>
                        <div className="player-result__score-container">
                            <div className="player-result__score">
                                54100
                            </div>
                            <div className="player-result__delta player-result__delta--success">
                                +39100
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-game-result__buttons">
                    {showRepeatButton && (
                        <>
                            <div className="flat-btn flat-btn--medium">
                                <svg>
                                    <use xlinkHref="#repeat"></use>
                                </svg>
                            </div>
                            <div className="flat-btn flat-btn--medium">
                                <svg>
                                    <use xlinkHref="#save"></use>
                                </svg>
                            </div>
                        </>
                    )}
                    {!showRepeatButton && (
                        <div className="flat-btn flat-btn--large">
                            <svg>
                                <use xlinkHref="#save"></use>
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}