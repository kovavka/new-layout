import * as React from 'react';
import './players.less';
import {PlayerBase} from './PlayerBase';
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
    showDeadButton?: boolean
    showInlineRiichi?: boolean
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
            showDeadButton,
            showInlineRiichi,
        } = this.props;

        return (
            <PlayerBase
                name={name}
                wind={wind}
                mode={PlayerMode.RIGHT}
                nameHeight={nameHeight}
                rotated={true}
                inlineWind={inlineWind}
                verticalButtons={true}
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