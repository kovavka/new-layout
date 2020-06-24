import * as React from "react";
import './players.less'
import {PlayerBase} from './PlayerBase';
import {PlayerMode} from '../../types/PlayerEnums';
import {PlayerProps} from './PlayerProps';

export class PlayerLeft extends React.Component<PlayerProps> {
    render() {
        return (
            <PlayerBase
                {...this.props}
                mode={PlayerMode.LEFT}
                rotated={true}
                startWithName={true}
                verticalButtons={true}
            />
        );
    }
}
