import * as React from 'react';
import {SelectYakuScreen} from '../select-yaku/SelectYakuScreen';
import {OutcomeTableMode} from '../../types/OutcomeTypes';

export class SelectYakuScreenExample extends React.Component<{}> {
    render() {
        return (
            <SelectYakuScreen playerName="Bla Blabla" selectedYaku={[]} disabledYaku={[]} outcome={OutcomeTableMode.RON} canGoNext={false} />
        );
    }
}