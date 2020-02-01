import * as React from 'react';
import './players.less';
import {PlayerButtonMode, PlayerMode, PlayerPointsMode} from '../../types/PlayerEnums';
import {classNames} from '../../services/ReactUtils';

type IProps = {
    name: string,
    wind: string
    mode: PlayerMode
    nameHeight?: string
    rotated?: boolean
    startWithName?: boolean
    inlineWind?: boolean
    points?: number
    pointsMode?: PlayerPointsMode
    penaltyPoints?: number
    winButtonMode?: PlayerButtonMode
    loseButtonMode?: PlayerButtonMode
    riichiButtonMode?: PlayerButtonMode
}

export class PlayerBase extends React.Component<IProps> {

    renderName() {
        const {name, wind, nameHeight, inlineWind} = this.props;

        return (
            <div className="player__name-container">
                <div className="player__name" style={{width: nameHeight}}>
                    {inlineWind && (
                        <span className="player__inline-wind">{wind}</span>
                    )}
                    {name}
                </div>
            </div>
        )
    }

    render() {
        const {
            wind,
            mode,
            rotated,
            startWithName,
            inlineWind,
            points,
            pointsMode,
            penaltyPoints,
            winButtonMode,
            loseButtonMode,
            riichiButtonMode,
        } = this.props;

        return (
            <div className = {classNames(
                'player',
                {'player--top': mode === PlayerMode.TOP},
                {'player--right': mode === PlayerMode.RIGHT},
                {'player--bottom': mode === PlayerMode.BOTTOM},
                {'player--left': mode === PlayerMode.LEFT},
                {'player--rotated': rotated},
                )}
            >
                {startWithName && this.renderName()}

                {wind && !inlineWind && (
                    <div className="player__wind-container">
                        <div className="player__wind">
                            {wind}
                        </div>
                    </div>
                )}

                {points && (
                    <div className="player__score-container">
                        {pointsMode === PlayerPointsMode.IDLE && (
                            <div className="player__score">
                                {points}
                            </div>
                        )}
                        {pointsMode === PlayerPointsMode.POSITIVE && (
                            <div className="player__score player__score--success">
                                +{points}
                            </div>
                        )}
                        {pointsMode === PlayerPointsMode.NEGATIVE && (
                            <div className="player__score player__score--danger">
                                -{points}
                            </div>
                        )}

                    </div>
                )}

                {!startWithName && this.renderName()}
            </div>
        )
    }
}