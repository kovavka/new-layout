import * as React from 'react';
import {TableStories} from '../../../storybook-base/StoryVars';
import {PlayerPropsBeforeStart, TableBeforeStart} from '../variations/TableBeforeStart';
import {getBottomPlayerBase, getLeftPlayerBase, getRightPlayerBase, getTopPlayerBase} from '../TableScreenExamples';

const topPlayer = {
    ...getTopPlayerBase(),
} as PlayerPropsBeforeStart;

const leftPlayer = {
    ...getLeftPlayerBase(),
} as PlayerPropsBeforeStart;

const rightPlayer = {
    ...getRightPlayerBase(),
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    ...getBottomPlayerBase(),
} as PlayerPropsBeforeStart;

TableStories.add(
    'before start',
    () => (
        <TableBeforeStart
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
        />
    )
);
