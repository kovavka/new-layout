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
    showInlineRiichi?: boolean
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

    renderRiichiButton() {
        const {verticalButtons, riichiButtonMode} = this.props;

        if (riichiButtonMode !== undefined) {
           return (
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
           )
        } else {
           return null
        }
    }

    renderButtons() {
        const {startWithName, verticalButtons, winButtonMode, loseButtonMode, showDeadButton} = this.props;
        const hasWinButton = winButtonMode !== undefined;
        const hasLoseButton = loseButtonMode !== undefined;
        const oneButton = (hasWinButton && !hasLoseButton) || (hasLoseButton && !hasWinButton);

        return (
            <>
                {!startWithName && this.renderRiichiButton()}

                {(hasWinButton || hasLoseButton || showDeadButton) && (
                    <div className={classNames(
                        'player__button-container',
                        {'player__button-container--horizontal': !verticalButtons}
                        )}
                    >

                        {hasWinButton && (
                            <div className={classNames(
                                'player__button flat-btn',
                                {'flat-btn--small': !oneButton},
                                {'flat-btn--v-large': oneButton && verticalButtons},
                                {'flat-btn--large': oneButton && !verticalButtons},
                                {'flat-btn--disabled': winButtonMode === PlayerButtonMode.DISABLE},
                                {'flat-btn--danger': winButtonMode === PlayerButtonMode.PRESSED},
                            )}
                            >
                                <svg>
                                    <use xlinkHref="#win" />
                                </svg>
                            </div>
                        )}

                        {hasLoseButton && (
                            <div className={classNames(
                                'player__button flat-btn',
                                {'flat-btn--small': !oneButton},
                                {'flat-btn--v-large': oneButton && verticalButtons},
                                {'flat-btn--large': oneButton && !verticalButtons},
                                {'flat-btn--disabled': loseButtonMode === PlayerButtonMode.DISABLE},
                                {'flat-btn--danger': loseButtonMode === PlayerButtonMode.PRESSED},
                            )}
                            >
                                <svg>
                                    <use xlinkHref="#lose" />
                                </svg>
                            </div>
                        )}

                        {showDeadButton && (
                            <div className={classNames(
                                'player__button flat-btn flat-btn--pressed ',
                                {'flat-btn--v-large': verticalButtons},
                                {'flat-btn--large': !verticalButtons},
                            )}
                            >
                                <div className="flat-btn__caption">
                                    dead hand
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {startWithName && this.renderRiichiButton()}
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
            showInlineRiichi,
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
                                <p>
                                    {points}
                                    {showInlineRiichi && (
                                        <svg className="player__inline-riichi">
                                            <use xlinkHref="#riichi-big" />
                                        </svg>
                                    )}
                                </p>
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