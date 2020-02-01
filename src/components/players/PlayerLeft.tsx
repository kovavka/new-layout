import * as React from "react";
import './players.less'
import {FONT_SIZE_HEADER, FONT_SIZE_PRIMARY} from "../../Variables";
import {RotatedName} from "./RotatedName";

export class PlayerLeft extends React.Component {
    render() {
        return (
            <div className="player player--left">
               <div className="player__name">
                   <RotatedName id="leftName" name="Bla Blabla" />
               </div>
               <div className="player__wind">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80">
                       <g fill="none" fillRule="evenodd" transform="translate(20 20) ">
                           <text fill="currentColor" fontSize={FONT_SIZE_HEADER}>南</text>
                       </g>
                   </svg>
               </div>
            </div>
        )
    }
}