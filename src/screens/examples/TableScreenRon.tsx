import * as React from 'react';
import {TableScreen} from '../table/TableScreen';
import {TableMode} from '../../types/TableMode';
import {OutcomeTableMode} from '../../types/OutcomeTypes';

export class TableScreenRon extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.SELECT_PLAYERS} outcomeMode={OutcomeTableMode.RON} inlineWind={true} />
        );
    }
}