import * as React from 'react';
import {PlayerPointsMode} from '../../../types/PlayerEnums';
import {getBottomPlayerBase, getLeftPlayerBase, getRightPlayerBase, getTopPlayerBase} from '../TableScreenExamples';
import {TableStories} from '../../../storybook-base/StoryVars';
import {PlayerPropsResult, TableResult} from '../variations/TableResult';

const topPlayer = {
    ...getTopPlayerBase(),
    points: 3000,
    pointsMode: PlayerPointsMode.NEGATIVE,
} as PlayerPropsResult;

const leftPlayer = {
    ...getLeftPlayerBase(),
    points: 3000,
    pointsMode: PlayerPointsMode.POSITIVE,
} as PlayerPropsResult;

const rightPlayer = {
    ...getRightPlayerBase(),
    points: 0,
    pointsMode: PlayerPointsMode.IDLE,
} as PlayerPropsResult;

const bottomPlayer = {
    ...getBottomPlayerBase(),
    points: 0,
    pointsMode: PlayerPointsMode.IDLE,
} as PlayerPropsResult;


TableStories.add(
    'result',
    () => (
        <TableResult
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
        />
    )
);
