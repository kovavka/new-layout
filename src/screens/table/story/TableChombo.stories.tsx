import * as React from 'react';
import {PlayerButtonMode} from '../../../types/PlayerEnums';
import {getBottomPlayerBase, getLeftPlayerBase, getRightPlayerBase, getTopPlayerBase} from '../TableScreenExamples';
import {TableStories} from '../../../storybook-base/StoryVars';
import {PlayerPropsChombo, TableChombo} from '../variations/TableChombo';

const topPlayer = {
    ...getTopPlayerBase(),
    loseButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsChombo;

const leftPlayer = {
    ...getLeftPlayerBase(),
    loseButtonMode: PlayerButtonMode.PRESSED,
} as PlayerPropsChombo;

const rightPlayer = {
    ...getRightPlayerBase(),
    loseButtonMode: PlayerButtonMode.IDLE,
} as PlayerPropsChombo;

const bottomPlayer = {
    ...getBottomPlayerBase(),
    loseButtonMode: PlayerButtonMode.IDLE,
} as PlayerPropsChombo;

TableStories.add(
    'chombo',
    () => (
        <TableChombo
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
        />
    )
);
