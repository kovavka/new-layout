import * as React from "react";
import './players.less'

export class PlayerRight extends React.Component {
    render() {
        return (
            <div className="player player--right">
                <div className="player__wind">北</div>
               <div className="player__name">Test Testov</div>
            </div>
        )
    }
}