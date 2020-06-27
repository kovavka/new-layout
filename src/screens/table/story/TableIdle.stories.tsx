import * as React from 'react';
import {PlayerPointsMode} from '../../../types/PlayerEnums';
import {getBottomPlayerBase, getLeftPlayerBase, getRightPlayerBase, getTopPlayerBase} from '../TableScreenExamples';
import {TableStories} from '../../../storybook-base/StoryVars';
import {PlayerPropsIdle, TableIdle} from '../variations/TableIdle';

const topPlayer = {
    ...getTopPlayerBase(),
    points: 21600,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: 22500,
} as PlayerPropsIdle;

const leftPlayer = {
    ...getLeftPlayerBase(),
    points: 54100,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsIdle;

const rightPlayer = {
    ...getRightPlayerBase(),
    points: 32800,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsIdle;

const bottomPlayer = {
    ...getBottomPlayerBase(),
    points: 10500,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsIdle;

TableStories.add(
    'idle',
    () => (
        <TableIdle
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
        />
    )
);
