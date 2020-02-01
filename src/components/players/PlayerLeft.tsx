import * as React from "react";
import './players.less'
import {Player} from './Player';
import {PlayerMode} from '../../types/PlayerEnums';

type IProps = {
    nameHeight: string
}

export class PlayerLeft extends React.Component<IProps> {
    render() {
        return (
            <Player name="Bla Blabla" wind="南" mode={PlayerMode.LEFT} nameHeight={this.props.nameHeight} rotated={true} startWithName={true} />
        )
    }
}
