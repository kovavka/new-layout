import * as React from "react";
import './players.less'
import {FONT_SIZE_HEADER, FONT_SIZE_PRIMARY} from "../../Variables";

export class PlayerLeft extends React.Component {
    render() {
        return (
            <div className="player player--left">
               <div className="player__name">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80">
                       <g fill="none" fill-rule="evenodd">
                           <text fill="currentColor" font-size={FONT_SIZE_PRIMARY}>Bla Blabla</text>
                       </g>
                   </svg>
               </div>
               <div className="player__wind">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80">
                       <g fill="none" fill-rule="evenodd" transform="translate(20 20) ">
                           <text fill="currentColor" font-size={FONT_SIZE_HEADER}>南</text>
                       </g>
                   </svg>
               </div>
            </div>
        )
    }
}