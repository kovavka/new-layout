import * as React from 'react';
import {TableScreen} from '../table/TableScreen';
import {TableMode} from '../../types/TableMode';
import {OutcomeTableMode} from '../../types/OutcomeTypes';

export class TableScreenChombo extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.SELECT_PLAYERS} outcomeMode={OutcomeTableMode.CHOMBO} inlineWind={true} />
        );
    }
}