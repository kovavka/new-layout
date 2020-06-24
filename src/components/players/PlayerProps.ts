import {PlayerButtonMode, PlayerPointsMode} from '../../types/PlayerEnums';

export type PlayerProps = {
    name: string
    nameWidth?: string
    rotated?: boolean //вот это в целом можно обернуть в HOC, потому что оно все равно будет зависит от настройки из localStorage
    wind: string
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
