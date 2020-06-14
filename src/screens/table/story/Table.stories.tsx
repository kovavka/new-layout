import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {TableScreenBeforeStart} from './TableScreenBeforeStart';
import {TableScreenIdle} from './TableScreenIdle';
import {TableScreenSelect} from './TableScreenSelect';
import {TableScreenRon} from './TableScreenRon';
import {TableScreenExhaustiveDraw} from './TableScreenExhaustiveDraw';
import {TableScreenChombo} from './TableScreenChombo';
import {TableScreenResult} from './TableScreenResult';

ScreenStories.add(
    'table before start',
    () => (
        <TableScreenBeforeStart />
    )
);
ScreenStories.add(
    'table',
    () => (
        <TableScreenIdle />
    )
);
ScreenStories.add(
    'table select',
    () => (
        <TableScreenSelect />
    )
);
ScreenStories.add(
    'table ron',
    () => (
        <TableScreenRon />
    )
);
ScreenStories.add(
    'table exhaustive draw',
    () => (
        <TableScreenExhaustiveDraw />
    )
);
ScreenStories.add(
    'table chombo',
    () => (
        <TableScreenChombo />
    )
);
ScreenStories.add(
    'table result',
    () => (
        <TableScreenResult />
    )
);
