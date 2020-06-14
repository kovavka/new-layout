import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {NewGameScreen} from '../NewGameScreen';
import {SearchPlayerScreen} from '../SearchPlayerScreen';

ScreenStories.add(
    'new game',
    () => (
        <NewGameScreen />
    )
);

ScreenStories.add(
    'search player',
    () => (
        <SearchPlayerScreen />
    )
);
