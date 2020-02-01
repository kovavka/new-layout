import * as React from "react";
import './players.less'
import {Player} from './Player';
import {PlayerMode} from '../../types/PlayerEnums';

export class PlayerBottom extends React.Component {
    render() {
        return (
            <Player name="Super long long long name" wind="西" mode={PlayerMode.BOTTOM} />
        )
    }
}