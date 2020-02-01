import * as React from "react";
import { BottomPanel } from "../../components/bottom-panel/BottomPanel";
import { PlayerTop } from "../../components/players/PlayerTop";
import { PlayerBottom } from "../../components/players/PlayerBottom";
import { PlayerLeft } from "../../components/players/PlayerLeft";
import { PlayerRight } from "../../components/players/PlayerRight";

declare var frame: any

//todo move to general state and HOC
type IState = {
    rotatedNameHeight: string
}

export class TableScreen extends React.Component<{}, IState> {
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

    render() {
        const {rotatedNameHeight} = this.state;

        return (
            <div className="flex-container page-table">
                <div className="flex-container__content flex-container">
                    <div className="flex-container__top">
                        <PlayerTop name="Random player" wind="東" rotated={false} />
                    </div>
                    <div className="flex-container__content page-table__center">
                        <iframe ref={this.frameRef}  name="frame" width="100%" height="100%" style={{position: 'absolute', visibility: 'hidden'}}></iframe>

                        <PlayerLeft name="Bla Blabla" wind="南" nameHeight={rotatedNameHeight} />
                        <div className="table-info">
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
                        </div>

                        <PlayerRight name="Test Testov" wind="北" nameHeight={rotatedNameHeight} />
                    </div>
                    <div className="flex-container__bottom">
                        <PlayerBottom name="Super long long long name" wind="西" />
                    </div>
                </div>
                <div className="flex-container__bottom">
                    <BottomPanel />
                </div>
            </div>
        )
    }
}