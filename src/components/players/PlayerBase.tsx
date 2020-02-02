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
    verticalButtons?: boolean
    points?: number
    pointsMode?: PlayerPointsMode
    penaltyPoints?: number
    winButtonMode?: PlayerButtonMode
    loseButtonMode?: PlayerButtonMode
    riichiButtonMode?: PlayerButtonMode
    deadHandButtonMode?: PlayerButtonMode
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

    renderButtons() {
        const {verticalButtons, winButtonMode, loseButtonMode, riichiButtonMode, deadHandButtonMode} = this.props;

        return (
            <>
                {winButtonMode && loseButtonMode && (
                    <div className={classNames('player__button-container', {'player__button-horizontal': !verticalButtons})}>
                        <div className="player__button">
                            <svg>
                                <use xlinkHref="#win"></use>
                            </svg>
                        </div>
                        <div className="player__button">
                            <svg>
                                <use xlinkHref="#lose"></use>
                            </svg>
                        </div>
                    </div>
                )}

                {winButtonMode || loseButtonMode || deadHandButtonMode && (
                    <div className={classNames(
                        'player__button',
                        {'player__button-vertical': verticalButtons},
                        {'player__button-horizontal': !verticalButtons},
                        )}
                    >
                        {winButtonMode && (
                            <svg>
                                <use xlinkHref="#win"></use>
                            </svg>
                        )}

                        {loseButtonMode && (
                            <svg>
                                <use xlinkHref="#lose"></use>
                            </svg>
                        )}

                        {deadHandButtonMode && (
                            <div className="player__button-dead-hand">
                                dead hand
                            </div>
                        )}
                    </div>
                )}

                {riichiButtonMode && (
                    <div className=""></div>
                )}
            </>
        );
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

                {this.renderButtons()}

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
                                {penaltyPoints && (
                                    <div className="player__penalty">{penaltyPoints / 1000 + 'k'}</div>
                                )}
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