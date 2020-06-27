import * as React from 'react';
import {PlayerButtonMode, PlayerPointsMode} from '../../../types/PlayerEnums';
import {getBottomPlayerBase, getLeftPlayerBase, getRightPlayerBase, getTopPlayerBase} from '../TableScreenExamples';
import {TableStories} from '../../../storybook-base/StoryVars';
import {PlayerPropsBeforeStart} from '../variations/TableBeforeStart';
import {TableRon} from '../variations/TableRon';

const topPlayer = {
    ...getTopPlayerBase(),
    winButtonMode: PlayerButtonMode.IDLE,
    loseButtonMode: PlayerButtonMode.DISABLE,
    riichiButtonMode: PlayerButtonMode.IDLE,
} as PlayerPropsBeforeStart;

const leftPlayer = {
    ...getLeftPlayerBase(),
    winButtonMode: PlayerButtonMode.PRESSED,
    loseButtonMode: PlayerButtonMode.DISABLE,
    riichiButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsBeforeStart;

const rightPlayer = {
    ...getRightPlayerBase(),
    winButtonMode: PlayerButtonMode.IDLE,
    loseButtonMode: PlayerButtonMode.DISABLE,
    riichiButtonMode: PlayerButtonMode.IDLE,
} as PlayerPropsBeforeStart;

const bottomPlayer = {
    ...getBottomPlayerBase(),
    winButtonMode: PlayerButtonMode.DISABLE,
    loseButtonMode: PlayerButtonMode.PRESSED,
    riichiButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsBeforeStart;


TableStories.add(
    'ron',
    () => (
        <TableRon
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
        />
    )
);
