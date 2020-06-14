import * as React from 'react';
import {SelectHandScreen} from '../SelectHandScreen';
import {OutcomeTableMode} from '../../../types/OutcomeTypes';
import {defaultYakuGroups} from '../YakuEmaple';
import {ArrowState, SelectHandActiveTab} from '../YakuTypes';

export class SelectYakuScreenExample extends React.Component<{}> {
    render() {
        return (
            <SelectHandScreen
                playerName="Bla Blabla"
                yakuGroups={defaultYakuGroups}
                outcome={OutcomeTableMode.RON}
                leftArrowState={ArrowState.UNAVAILABLE}
                rightArrowState={ArrowState.UNAVAILABLE}
                activeTab={SelectHandActiveTab.YAKU}
                canGoNext={false} />
        );
    }
}