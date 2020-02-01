import * as React from "react";
import './players.less'
import {FONT_SIZE_HEADER, FONT_SIZE_HEADER_PX} from '../../Variables';

type IProps = {
    nameHeight: string
}

export class PlayerRight extends React.Component<IProps> {
    render() {
        return (
            <div className="player player--right player--rotated">
                <div className="player__name-container">
                    <div className="player__name" style={{width: this.props.nameHeight}}>
                        Test Testov
                    </div>
                </div>
                <div className="player__wind-container">
                    <div className="player__wind">
                        北
                    </div>
                </div>
            </div>
        )
    }
}