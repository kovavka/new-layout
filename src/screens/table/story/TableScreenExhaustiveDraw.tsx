import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';

export class TableScreenExhaustiveDraw extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.SELECT_PLAYERS} outcomeMode={OutcomeTableMode.EXHAUSTIVE_DRAW} inlineWind={true} />
        );
    }
}