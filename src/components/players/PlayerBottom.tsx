import * as React from "react";
import './players.less'

export class PlayerBottom extends React.Component {
    render() {
        return (
            <div className="player player--bottom">
                <div className="player__wind">西</div>
               <div className="player__name">Super long long long name</div>
            </div>
        )
    }
}