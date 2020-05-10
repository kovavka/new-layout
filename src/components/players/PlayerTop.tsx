import * as React from "react";
import './players.less'
import {PlayerBase} from './PlayerBase';
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
    showDeadButton?: boolean
    showInlineRiichi?: boolean
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
            showDeadButton,
            showInlineRiichi,
        } = this.props;

        return (
            <PlayerBase
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
                showDeadButton={showDeadButton}
                showInlineRiichi={showInlineRiichi}
            />
        );
    }
}