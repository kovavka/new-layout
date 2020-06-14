import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';

export class TableScreenResult extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.RESULT} outcomeMode={OutcomeTableMode.RON} inlineWind={true} showPoints={true} showArrows={true} />
        );
    }
}