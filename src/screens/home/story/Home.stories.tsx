import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {HomeScreenStateless} from '../HomeScreenStateless';
import {boolean} from '@storybook/addon-knobs';

ScreenStories.add(
    'home',
    () => (
        <HomeScreenStateless
            canStartGame={boolean('canStartGame', true)}
            hasStartedGame={boolean('hasStartedGame', false)}
            hasPrevGame={boolean('hasPrevGame', true)}
            canSeeOtherTables={boolean('canSeeOtherTables', true)}
            hasStat={boolean('hasStat', true)}
        />
    )
);
