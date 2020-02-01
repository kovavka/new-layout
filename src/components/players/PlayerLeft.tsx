import * as React from "react";
import './players.less'
import {FONT_SIZE_HEADER, FONT_SIZE_HEADER_PX} from '../../Variables';

type IProps = {
    nameHeight: string
}

export class PlayerLeft extends React.Component<IProps> {
    render() {
        return (
            <div className="player player--left player--rotated">
               <div className="player__name-container">
                   <div className="player__name" style={{width: this.props.nameHeight}}>
                       Bla Blabla
                   </div>
               </div>
                <div className="player__wind-container">
                    <div className="player__wind">
                        南
                    </div>
                </div>
            </div>
        )
    }
}
