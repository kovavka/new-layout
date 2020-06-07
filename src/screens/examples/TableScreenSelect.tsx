import * as React from 'react';
import {TableScreen} from '../table/TableScreen';
import {TableMode} from '../../types/TableMode';

export class TableScreenSelect extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.GAME} showRoundInfo={true} showTimer={true} inlineWind={true} showPoints={true} selectOutcome={true}/>
        );
    }
}