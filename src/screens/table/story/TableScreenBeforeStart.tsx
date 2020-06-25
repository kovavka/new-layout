import * as React from "react";
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {PlayerProps} from '../../../components/players/PlayerProps';
import {PlayerPropsChombo} from './TableScreenChombo';

export type PlayerPropsBeforeStart =  Pick<PlayerProps, 'name' | 'wind' | 'rotated' | 'nameWidth'>
const topPlayer = {
    name: "Random player",
    wind: "東",
    rotated: false,
    nameWidth: undefined,
} as PlayerPropsBeforeStart;

const leftPlayer = {
    name: "Bla Blabla",
    wind: "南",
    rotated: false,
    nameWidth: 'initial',
} as PlayerPropsBeforeStart;

const rightPlayer = {
    name: "Test Testov",
    wind: "北",
    rotated: false,
    nameWidth: 'initial',
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    name: "Super long long long name",
    wind: "西",
    rotated: false,
    nameWidth: undefined,
} as PlayerPropsBeforeStart;

function getPlayer(player: PlayerPropsChombo): PlayerProps {
    return {
        ...player,
        inlineWind: false,
        points: undefined,
        pointsMode: undefined,
        winButtonMode: undefined,
        loseButtonMode: undefined,
        riichiButtonMode: undefined,
        showDeadButton: false,
        penaltyPoints: undefined,
    }
}

export class TableScreenBeforeStart extends React.Component {
    render() {
        return (
           <TableScreen
               topPlayer={getPlayer(topPlayer)}
               leftPlayer={getPlayer(leftPlayer)}
               rightPlayer={getPlayer(rightPlayer)}
               bottomPlayer={getPlayer(bottomPlayer)}
               tableMode={TableMode.BEFORE_START}
               showTableNumber={true}
           />
        );
    }
}