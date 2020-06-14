import * as React from 'react';
import {TableScreen} from '../TableScreen';
import {TableMode} from '../../../types/TableMode';

export class TableScreenIdle extends React.Component {
    render() {
        return (
           <TableScreen tableMode={TableMode.GAME} showRoundInfo={true} showTimer={true} inlineWind={true} showPoints={true}/>
        );
    }
}