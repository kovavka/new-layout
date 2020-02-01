import * as React from 'react';
import './players.less';
import {PlayerButtonMode, PlayerMode, PlayerPointsMode} from '../../types/PlayerEnums';
import {classNames} from '../../services/ReactUtils';

type IProps = {
    name: string,
    mode: PlayerMode,
    nameHeight?: string
    rotated?: boolean,
    startWithName?: boolean
    wind: string
    inlineWind?: boolean
    points?: number
    pointsMode?: PlayerPointsMode
    winButtonMode?: PlayerButtonMode
    loseButtonMode?: PlayerButtonMode
    riichiButtonMode?: PlayerButtonMode
}

export class Player extends React.Component<IProps> {

    renderName() {
        const {name, nameHeight} = this.props

        return (
            <div className="player__name-container">
                <div className="player__name" style={{width: nameHeight}}>
                    {name}
                </div>
            </div>
        )
    }

    render() {
        const {
            mode,
            rotated,
            startWithName,
            wind,
            inlineWind,
            points,
            pointsMode,
            winButtonMode,
            loseButtonMode,
            riichiButtonMode
        } = this.props

        console.log(inlineWind)

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
                            北
                        </div>
                    </div>
                )}

                {!startWithName && this.renderName()}
            </div>
        )
    }
}