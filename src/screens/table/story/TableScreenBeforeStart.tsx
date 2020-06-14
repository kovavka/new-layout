import * as React from "react";
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';

export class TableScreenBeforeStart extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.BEFORE_START} showTableNumber={true} />
        );
    }
}