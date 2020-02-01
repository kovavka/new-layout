import * as React from "react";
import './players.less'
import {RotatedName} from './RotatedName';
import {FONT_SIZE_HEADER, FONT_SIZE_HEADER_PX} from '../../Variables';

export class PlayerRight extends React.Component {
    render() {
        return (
            <div className="player player--right">
                <div className="player__name">
                    <RotatedName id="leftName" name="Bla Blabla" />
                </div>
                <div className="player__wind">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${FONT_SIZE_HEADER} 42`}>
                        <g fill="none" fillRule="evenodd">
                            <text fill="currentColor" fontSize={FONT_SIZE_HEADER_PX}>南</text>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}