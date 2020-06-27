import * as React from 'react';
import {PlayerButtonMode, PlayerPointsMode} from '../../../types/PlayerEnums';
import {
    getBottomPlayerBase,
    getLeftPlayerBase,
    getRightPlayerBase,
    getTableInfoBase,
    getTopPlayerBase,
} from '../TableScreenExamples';
import {TableStories} from '../../../storybook-base/StoryVars';
import {PlayerPropsBeforeStart} from '../variations/TableBeforeStart';
import {TableRon} from '../variations/TableRon';
import {TableInfoProps} from '../base/TableInfoProps';
import {TableChombo} from '../variations/TableChombo';

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

const tableInfo = {
    ...getTableInfoBase(),
    showRoundInfo: false,
    showTableNumber: false,
    showTimer: true,
} as TableInfoProps;


TableStories.add(
    'ron',
    () => (
        <TableRon
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
            tableInfo={tableInfo}
        />
    )
);
