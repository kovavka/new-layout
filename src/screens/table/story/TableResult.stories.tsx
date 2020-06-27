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
import {PlayerPropsResult, TableResult} from '../variations/TableResult';
import {TableInfoProps} from '../base/TableInfoProps';

const topPlayer = {
    ...getTopPlayerBase(),
    points: 3000,
    pointsMode: PlayerPointsMode.NEGATIVE,
    showInlineRiichi: true,
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
    showInlineRiichi: true,
} as PlayerPropsResult;

const bottomPlayer = {
    ...getBottomPlayerBase(),
    points: 0,
    pointsMode: PlayerPointsMode.IDLE,
    showInlineRiichi: true,
} as PlayerPropsResult;

const tableInfo = {
    ...getTableInfoBase(),
    showRoundInfo: false,
    showTableNumber: false,
    showTimer: true,
} as TableInfoProps;


TableStories.add(
    'result',
    () => (
        <TableResult
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
            tableInfo={tableInfo}
        />
    )
);
