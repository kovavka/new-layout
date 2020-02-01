import * as React from "react";
import './players.less'
import {FONT_SIZE_HEADER, FONT_SIZE_HEADER_PX} from '../../Variables';

export class PlayerRight extends React.Component {
    render() {
        return (
            <div className="player player--right player--rotated">
                <div className="player__name-container">
                    <div className="player__name player__name--right">
                        Test Testov
                    </div>
                </div>
                {/*<div className="player__wind">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${FONT_SIZE_HEADER} 42`}>*/}
                {/*        <g fill="none" fillRule="evenodd">*/}
                {/*            <text fill="currentColor" fontSize={FONT_SIZE_HEADER_PX}>北</text>*/}
                {/*        </g>*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
        )
    }
}