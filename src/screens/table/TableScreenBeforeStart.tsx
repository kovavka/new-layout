import * as React from "react";
import { BottomPanel } from "../../components/bottom-panel/BottomPanel";
import { PlayerTop } from "../../components/players/PlayerTop";
import { PlayerBottom } from "../../components/players/PlayerBottom";
import { PlayerLeft } from "../../components/players/PlayerLeft";
import { PlayerRight } from "../../components/players/PlayerRight";

declare var frame: any

type IState = {
    rotatedNameHeight: string
}

export class TableScreenBeforeStart extends React.Component<{}, IState> {
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
                        <PlayerTop />
                    </div>
                    <div className="flex-container__content page-table__center">
                        <iframe ref={this.frameRef}  name="frame" width="100%" height="100%" style={{position: 'absolute', visibility: 'hidden'}}></iframe>

                        <PlayerLeft nameHeight={rotatedNameHeight} />
                        <div className="table-info">
                            <div className="table-info__table-caption">
                               Table
                            </div>
                            <div className="table-info__table-number">
                               #4
                            </div>
                        </div>

                        <PlayerRight nameHeight={rotatedNameHeight} />
                    </div>
                    <div className="flex-container__bottom">
                        <PlayerBottom />
                    </div>
                </div>
                <div className="flex-container__bottom">
                    <BottomPanel />
                </div>
            </div>
        )
    }
}