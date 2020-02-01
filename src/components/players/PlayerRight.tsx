import * as React from 'react';
import './players.less';
import {Player} from './Player';
import {PlayerMode} from '../../types/PlayerEnums';

type IProps = {
    nameHeight: string
}

export class PlayerRight extends React.Component<IProps> {
    render() {
        return (
            <Player name="Test Testov" wind="北" mode={PlayerMode.RIGHT} nameHeight={this.props.nameHeight} rotated={true}  />
        )
    }
}