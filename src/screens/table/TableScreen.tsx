import * as React from "react";
import { BottomPanel } from "../../components/bottom-panel/BottomPanel";
import { PlayerTop } from "../../components/players/PlayerTop";
import { PlayerLeft } from "../../components/players/PlayerLeft";
import { PlayerRight } from "../../components/players/PlayerRight";
import {PlayerPointsMode} from '../../types/PlayerEnums';
import {PlayerBottom} from '../../components/players/PlayerBottom';
import {TableMode} from '../../types/TableMode';
import {OutcomeTableMode} from '../../types/OutcomeTypes';

declare var frame: any;

type IProps = {
    tableMode: TableMode
    outcomeMode?: OutcomeTableMode
    showRoundInfo?: boolean
    showTableNumber?: boolean
    showTimer?: boolean
    gamesLeft?: number
    showPoints?: boolean
    inlineWind?: boolean
    // topPlayer: Player
    // leftPlayer: Player
    // bottomPlayer: Player
    // rightPlayer: Player
}

//todo move to general state and HOC
type IState = {
    rotatedNameHeight: string
}

export class TableScreen extends React.Component<IProps, IState> {
    state = {
        rotatedNameHeight: 'initial'
    };
    frameRef = React.createRef<HTMLIFrameElement>();

    componentDidMount(): void {
        this.setState({
            rotatedNameHeight: frame.innerHeight
        });

        frame.onresize = () => {
            this.setState({
                rotatedNameHeight: frame.innerHeight
            });
        }
    }

    renderTableInfo() {
        const {showRoundInfo, showTableNumber, showTimer, gamesLeft} = this.props;

        return (
            <div className="table-info">
                {showRoundInfo && (
                    <>
                        <div className="table-info__round">
                            東 1
                        </div>
                        <div className="table-info__tenbou">
                            <div className="svg-button">
                                <svg>
                                    <use xlinkHref="#riichi-small"></use>
                                </svg>
                            </div>
                            <div className="table-info__tenbou-count">
                                1
                            </div>
                        </div>
                        <div className="table-info__tenbou">
                            <div className="svg-button">
                                <svg>
                                    <use xlinkHref="#honba"></use>
                                </svg>
                            </div>
                            <div className="table-info__tenbou-count">
                                2
                            </div>
                        </div>
                        {showTimer && (
                            <div className="table-info__timer">
                                47:25
                            </div>
                        )}
                        {gamesLeft && (
                            <div className="table-info__games-left">
                                <div className="table-info__games-left-count">
                                    {gamesLeft}
                                </div>
                                <div className="table-info__games-left-caption">
                                    max games left
                                </div>
                            </div>
                        )}
                    </>
                )}
                {showTableNumber && (
                    <>
                        <div className="table-info__table-caption">
                            Table
                        </div>
                        <div className="table-info__table-number">
                            #4
                        </div>
                    </>
                )}
            </div>
        );
    }

    renderPlayerTop() {
        const {inlineWind, showPoints} = this.props;
        let points = showPoints ? 21600 : undefined;
        let pointsMode = showPoints ? PlayerPointsMode.IDLE : undefined;
        let penaltyPoints = 22500;

        return (
            <PlayerTop
                name="Random player"
                wind="東"
                rotated={false}
                inlineWind={inlineWind}
                points={points}
                pointsMode={pointsMode}
                penaltyPoints={penaltyPoints}
            />
            )
    }

    renderPlayerLeft() {
        const {inlineWind, showPoints} = this.props;
        const {rotatedNameHeight} = this.state;
        let points = showPoints ? 54100 : undefined;
        let pointsMode = showPoints ? PlayerPointsMode.IDLE : undefined;

        return (
            <PlayerLeft
                name="Bla Blabla"
                wind="南"
                nameHeight={rotatedNameHeight}
                inlineWind={inlineWind}
                points={points}
                pointsMode={pointsMode}
            />
            )
    }

    renderPlayerRight() {
        const {inlineWind, showPoints} = this.props;
        const {rotatedNameHeight} = this.state;
        let points = showPoints ? 32800 : undefined;
        let pointsMode = showPoints ? PlayerPointsMode.IDLE : undefined;

        return (
            <PlayerRight
                name="Test Testov"
                wind="北"
                nameHeight={rotatedNameHeight}
                inlineWind={inlineWind}
                points={points}
                pointsMode={pointsMode}
            />
            )
    }

    renderPlayerBottom() {
        const {inlineWind, showPoints} = this.props;
        let points = showPoints ? 10500 : undefined;
        let pointsMode = showPoints ? PlayerPointsMode.IDLE : undefined;

        return (
            <PlayerBottom
                name="Super long long long name"
                wind="西"
                inlineWind={inlineWind}
                points={points}
                pointsMode={pointsMode}
            />
        )
    }

    render() {
        return (
            <div className="flex-container page-table">
                <div className="flex-container__content flex-container">
                    <div className="flex-container__top">
                        {this.renderPlayerTop()}
                    </div>
                    <div className="flex-container__content page-table__center">
                        <iframe ref={this.frameRef}  name="frame" width="100%" height="100%" style={{position: 'absolute', visibility: 'hidden'}}></iframe>

                        {this.renderPlayerLeft()}

                        {this.renderTableInfo()}

                        {this.renderPlayerRight()}
                    </div>
                    <div className="flex-container__bottom">
                        {this.renderPlayerBottom()}
                    </div>
                </div>
                <div className="flex-container__bottom">
                    <BottomPanel />
                </div>
            </div>
        );
    }
}