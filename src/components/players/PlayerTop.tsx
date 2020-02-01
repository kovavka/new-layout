import * as React from "react";
import './players.less'

export class PlayerTop extends React.Component {
    render() {
        return (
            <div className="player player--top">
               <div className="player__name">Random player</div>
               <div className="player__wind">東</div>
            </div>
        )
    }
}