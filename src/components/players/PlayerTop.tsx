import * as React from "react";
import './players.less'
import {Player} from './Player';
import {PlayerButtonMode, PlayerMode, PlayerPointsMode} from '../../types/PlayerEnums';

type IProps = {
    name: string
    wind: string
    rotated?: boolean //вот это в целом можно обернуть в HOC, потому что оно все равно будет зависит от настройки из localStorage
    inlineWind?: boolean
    points?: number
    pointsMode?: PlayerPointsMode
    penaltyPoints?: number
    winButtonMode?: PlayerButtonMode
    loseButtonMode?: PlayerButtonMode
    riichiButtonMode?: PlayerButtonMode
}

export class PlayerTop extends React.Component<IProps> {
    render() {
        const {
            name,
            wind,
            rotated,
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
                mode={PlayerMode.TOP}
                startWithName={true}
                rotated={rotated}
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