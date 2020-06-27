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
import {PlayerPropsExhaustiveDraw, TableExhaustiveDraw} from '../variations/TableExhaustiveDraw';
import {TableInfoProps} from '../base/TableInfoProps';

const topPlayer = {
    ...getTopPlayerBase(),
    winButtonMode: undefined,
    riichiButtonMode: PlayerButtonMode.PRESSED,
    showDeadButton: true,
} as PlayerPropsExhaustiveDraw;

const leftPlayer = {
    ...getLeftPlayerBase(),
    winButtonMode: undefined,
    riichiButtonMode: PlayerButtonMode.PRESSED,
    showDeadButton: true,
} as PlayerPropsExhaustiveDraw;

const rightPlayer = {
    ...getRightPlayerBase(),
    winButtonMode: PlayerButtonMode.PRESSED,
    riichiButtonMode: PlayerButtonMode.IDLE,
    showDeadButton: false,
} as PlayerPropsExhaustiveDraw;

const bottomPlayer = {
    ...getBottomPlayerBase(),
    winButtonMode: PlayerButtonMode.IDLE,
    riichiButtonMode: PlayerButtonMode.IDLE,
    showDeadButton: false,
} as PlayerPropsExhaustiveDraw;

const tableInfo = {
    ...getTableInfoBase(),
    showRoundInfo: false,
    showTableNumber: false,
    showTimer: true,
} as TableInfoProps;


TableStories.add(
    'exhaustive draw',
    () => (
        <TableExhaustiveDraw
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
            tableInfo={tableInfo}
        />
    )
);
