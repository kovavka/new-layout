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
import {PlayerArrow, PlayerSide, ResultArrowsProps} from '../base/ResultArrowsProps';

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

const arrowsInfo = {
    arrows: [
        {
            points: 1000,
            honbaPoints: 300,
            withRiichi: false,
            withPao: false,
            start: PlayerSide.BOTTOM,
            end: PlayerSide.LEFT,
        },
        {
            points: 5200,
            honbaPoints: 0,
            withRiichi: false,
            withPao: true,
            start: PlayerSide.BOTTOM,
            end: PlayerSide.TOP,
        },
        {
            points: 12000,
            honbaPoints: 0,
            withRiichi: true,
            withPao: false,
            start: PlayerSide.BOTTOM,
            end: PlayerSide.RIGHT,
        },
        {
            points: 3900,
            honbaPoints: 0,
            withRiichi: true,
            withPao: true,
            start: PlayerSide.LEFT,
            end: PlayerSide.RIGHT,
        },
        {
            points: 1000,
            honbaPoints: 0,
            withRiichi: true,
            withPao: false,
            start: PlayerSide.LEFT,
            end: PlayerSide.TOP,
        },
        {
            points: 1000,
            honbaPoints: 0,
            withRiichi: true,
            withPao: false,
            start: PlayerSide.RIGHT,
            end: PlayerSide.TOP,
        },
    ]
} as ResultArrowsProps;


TableStories.add(
    'result',
    () => (
        <TableResult
            topPlayer={topPlayer}
            leftPlayer={leftPlayer}
            rightPlayer={rightPlayer}
            bottomPlayer={bottomPlayer}
            tableInfo={tableInfo}
            arrowsInfo={arrowsInfo}
        />
    )
);
