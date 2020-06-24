import {PlayerButtonMode, PlayerPointsMode} from '../../types/PlayerEnums';
import {TableMode} from '../../types/TableMode';
import {OutcomeTableMode} from '../../types/OutcomeTypes';

export function getPlayerTop(inlineWind, showPoints, tableMode, outcomeMode) {
    let points = showPoints ? 21600 : undefined;
    let pointsMode = showPoints ? PlayerPointsMode.IDLE : undefined;
    let penaltyPoints = 22500;

    //todo move to HOC
    let winButtonMode: PlayerButtonMode | undefined;
    let loseButtonMode: PlayerButtonMode | undefined;
    let riichiButtonMode: PlayerButtonMode | undefined;
    let showDeadButton: boolean | undefined;

    if (tableMode && tableMode !== TableMode.RESULT && outcomeMode !== undefined) {
        switch (outcomeMode) {
            case OutcomeTableMode.RON:
                winButtonMode = PlayerButtonMode.IDLE;
                loseButtonMode = PlayerButtonMode.DISABLE;
                riichiButtonMode = PlayerButtonMode.IDLE;
                break;
            case OutcomeTableMode.TSUMO:
                winButtonMode = PlayerButtonMode.IDLE;
                riichiButtonMode = PlayerButtonMode.IDLE;
                break;
            case OutcomeTableMode.CHOMBO:
                loseButtonMode = PlayerButtonMode.PRESSED;
                break;
            case OutcomeTableMode.NAGASHI:
                winButtonMode = PlayerButtonMode.IDLE;
                break;
            case OutcomeTableMode.NAGASHI_TEMPAI:
            case OutcomeTableMode.EXHAUSTIVE_DRAW:
                riichiButtonMode = PlayerButtonMode.PRESSED;
                showDeadButton = true;
                break;
            case OutcomeTableMode.ABORTIVE_DRAW:
                riichiButtonMode = PlayerButtonMode.IDLE;
                break;
            case OutcomeTableMode.PAO:
                loseButtonMode = PlayerButtonMode.IDLE;
                break;
        }
    }

    return {
        name: "Random player",
        wind: "東",
        rotated: false,
        inlineWind: inlineWind,
        points: points,
        pointsMode: pointsMode,
        winButtonMode: winButtonMode,
        loseButtonMode: loseButtonMode,
        riichiButtonMode: riichiButtonMode,
        showDeadButton: showDeadButton,
        penaltyPoints: penaltyPoints,
    };
}
