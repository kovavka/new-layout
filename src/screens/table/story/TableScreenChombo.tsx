import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerButtonMode, PlayerPointsMode} from '../../../types/PlayerEnums';

export type PlayerPropsChombo =  Pick<PlayerProps, 'name' | 'nameWidth' |'rotated' |'wind' |'loseButtonMode'>

const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    loseButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsChombo;

function getPlayer(player: PlayerPropsChombo): PlayerProps {
    return {
        ...player,
        inlineWind: true,
        points: undefined,
        pointsMode: undefined,
        winButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableScreenChombo extends React.Component {
    render() {
        return (
           <TableScreen topPlayer={getPlayer(topPlayer)} tableMode={TableMode.SELECT_PLAYERS} outcomeMode={OutcomeTableMode.CHOMBO} inlineWind={true} />
        );
    }
}