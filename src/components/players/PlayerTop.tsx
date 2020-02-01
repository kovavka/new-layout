import * as React from "react";
import './players.less'
import {Player} from './Player';
import {PlayerMode} from '../../types/PlayerEnums';

export class PlayerTop extends React.Component {
    render() {
        return (
            <Player name="Random player" wind="東" mode={PlayerMode.TOP} startWithName={true} />
        )
    }
}