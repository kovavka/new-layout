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
    showDeadButton?: boolean
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
        const {verticalButtons, winButtonMode, loseButtonMode, riichiButtonMode, showDeadButton} = this.props;
        const hasWinButton = winButtonMode !== undefined;
        const hasLoseButton = loseButtonMode !== undefined;
        const hasRiichiButton = riichiButtonMode !== undefined;
        const oneButton = (hasWinButton && !hasLoseButton) || (hasLoseButton && !hasWinButton);

        return (
            <>
                <div className={classNames(
                    'player__button-container',
                    {'player__button-container--horizontal': !verticalButtons}
                    )}
                >

                    {hasWinButton && (
                        <div className={classNames(
                            'player__button',
                            {'player__button--small': !oneButton},
                            {'player__button--vertical': !oneButton && verticalButtons},
                            {'player__button--horizontal': !oneButton && !verticalButtons},
                            {'player__button--disabled': winButtonMode === PlayerButtonMode.DISABLE},
                            {'player__button--success': winButtonMode === PlayerButtonMode.PRESSED},
                        )}
                        >
                            <svg>
                                <use xlinkHref="#win" />
                            </svg>
                        </div>
                    )}

                    {hasLoseButton && (
                        <div className={classNames(
                            'player__button',
                            {'player__button--small': !oneButton},
                            {'player__button--vertical': !oneButton && verticalButtons},
                            {'player__button--horizontal': !oneButton && !verticalButtons},
                            {'player__button--disabled': loseButtonMode === PlayerButtonMode.DISABLE},
                            {'player__button--danger': loseButtonMode === PlayerButtonMode.PRESSED},
                        )}
                        >
                            <svg>
                                <use xlinkHref="#lose" />
                            </svg>
                        </div>
                    )}
                </div>

                {showDeadButton && (
                    <div className={classNames(
                        'player__button player__button--pressed',
                        {'player__button--vertical': verticalButtons},
                        {'player__button--horizontal': !verticalButtons},
                    )}
                    >
                        <div className="player__button-dead-hand">
                            dead hand
                        </div>
                    </div>
                )}

                {hasRiichiButton && (
                    <div className={classNames('player__riichi-button', {'player__riichi-button--rotated': verticalButtons})}>
                        {riichiButtonMode === PlayerButtonMode.IDLE && (
                            <svg>
                                <use xlinkHref="#riichi-big-empty" />
                            </svg>
                        )}
                        {riichiButtonMode === PlayerButtonMode.PRESSED && (
                            <svg>
                                <use xlinkHref="#riichi-big" />
                            </svg>
                        )}
                    </div>
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