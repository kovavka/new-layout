import * as React from 'react';
import {TableScreen} from '../table/TableScreen';
import {TableMode} from '../../types/TableMode';

export class TableScreenRon extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.SELECT_PLAYERS} showRoundInfo={true} gamesLeft={2} inlineWind={true} />
        );
    }
}