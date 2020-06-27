import * as React from 'react';
import {PlayerPointsMode} from '../../../types/PlayerEnums';
import {getBottomPlayerBase, getLeftPlayerBase, getRightPlayerBase, getTopPlayerBase} from '../TableScreenExamples';
import {TableStories} from '../../../storybook-base/StoryVars';
import {PlayerPropsBeforeStart} from '../variations/TableBeforeStart';
import {TableSelect} from '../variations/TableSelect';

const topPlayer = {
    ...getTopPlayerBase(),
    points: 21600,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: 22500,
} as PlayerPropsBeforeStart;

const leftPlayer = {
    ...getLeftPlayerBase(),
    points: 54100,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsBeforeStart;

const rightPlayer = {
    ...getRightPlayerBase(),
    points: 32800,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    ...getBottomPlayerBase(),
    points: 10500,
    pointsMode: PlayerPointsMode.IDLE,
    penaltyPoints: undefined,
} as PlayerPropsBeforeStart;

TableStories.add(
    'select',
    () => (
        <TableSelect
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
        />
    )
);
