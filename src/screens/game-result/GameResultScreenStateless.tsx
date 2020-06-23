import * as React from "react";
import './page-game-result.less'
import {classNames} from '../../services/ReactUtils';

type IProps = {
    showRepeatButton?: boolean
    players: PlayerScore[]

}

type PlayerScore = {
    name: string
    score: number
    delta: number
}

export class GameResultScreenStateless extends React.Component<IProps> {
    render() {
        const {players, showRepeatButton} = this.props;

        return (
            <div className="page-game-result">
                <div className="page-game-result__players">
                    {players.map((player, i) => (
                        <div key={i} className="player-result">
                            <div className="player-result__name">
                                {player.name}
                            </div>
                            <div className="player-result__score-container">
                                <div className="player-result__score">
                                    {player.score}
                                </div>
                                <div className={classNames(
                                    'player-result__delta',
                                    {'player-result__delta--danger': player.delta < 0},
                                    {'player-result__delta--success': player.delta > 0}
                                )}>
                                    {player.delta <= 0 ? player.delta : '+' + player.delta}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="page-game-result__buttons">
                    {showRepeatButton && (
                        <>
                            <div className="flat-btn flat-btn--medium">
                                <svg>
                                    <use xlinkHref="#repeat"></use>
                                </svg>
                            </div>
                            <div className="flat-btn flat-btn--medium">
                                <svg>
                                    <use xlinkHref="#save"></use>
                                </svg>
                            </div>
                        </>
                    )}
                    {!showRepeatButton && (
                        <div className="flat-btn flat-btn--large">
                            <svg>
                                <use xlinkHref="#save"></use>
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}