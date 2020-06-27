import * as React from 'react';
import {PlayerButtonMode} from '../../../types/PlayerEnums';
import {
    getBottomPlayerBase,
    getLeftPlayerBase,
    getRightPlayerBase,
    getTableInfoBase,
    getTopPlayerBase,
} from '../TableScreenExamples';
import {TableStories} from '../../../storybook-base/StoryVars';
import {PlayerPropsChombo, TableChombo} from '../variations/TableChombo';
import {TableInfoProps} from '../base/TableInfoProps';

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

const tableInfo = {
    ...getTableInfoBase(),
    showRoundInfo: false,
    showTableNumber: false,
    showTimer: true,
} as TableInfoProps;

TableStories.add(
    'chombo',
    () => (
        <TableChombo
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
            tableInfo={tableInfo}
        />
    )
);
