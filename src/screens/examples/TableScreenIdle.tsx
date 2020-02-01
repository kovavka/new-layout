import * as React from "react";
import { BottomPanel } from "../../components/bottom-panel/BottomPanel";
import { PlayerTop } from "../../components/players/PlayerTop";
import { PlayerBottom } from "../../components/players/PlayerBottom";
import { PlayerLeft } from "../../components/players/PlayerLeft";
import { PlayerRight } from "../../components/players/PlayerRight";
import {TableScreen} from '../table/TableScreen';

export class TableScreenIdle extends React.Component {
    render() {
        return (
           <TableScreen showRoundInfo={true} inlineWind={true} showPoints={true}/>
        );
    }
}