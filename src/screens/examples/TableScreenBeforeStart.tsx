import * as React from "react";
import {TableScreen} from '../table/TableScreen';
import {TableMode} from '../../types/TableMode';

export class TableScreenBeforeStart extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.IDLE} showTableNumber={true} />
        );
    }
}