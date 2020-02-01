import * as React from 'react';
import './players.less';
import {Player} from './Player';
import {PlayerButtonMode, PlayerMode, PlayerPointsMode} from '../../types/PlayerEnums';

type IProps = {
    name: string
    wind: string
    nameHeight: string
    startWithName?: boolean
    inlineWind?: boolean
    points?: number
    pointsMode?: PlayerPointsMode
    penaltyPoints?: number
    winButtonMode?: PlayerButtonMode
    loseButtonMode?: PlayerButtonMode
    riichiButtonMode?: PlayerButtonMode
}

export class PlayerRight extends React.Component<IProps> {
    render() {
        const {
            name,
            wind,
            nameHeight,
            inlineWind,
            points,
            pointsMode,
            penaltyPoints,
            winButtonMode,
            loseButtonMode,
            riichiButtonMode,
        } = this.props


        return (
            <Player
                name={name}
                wind={wind}
                mode={PlayerMode.RIGHT}
                nameHeight={nameHeight}
                rotated={true}
                inlineWind={inlineWind}
                points={points}
                pointsMode={pointsMode}
                penaltyPoints={penaltyPoints}
                winButtonMode={winButtonMode}
                loseButtonMode={loseButtonMode}
                riichiButtonMode={riichiButtonMode}
            />
        )
    }
}