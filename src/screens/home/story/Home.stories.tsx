import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {HomeScreenExample} from './HomeScreenExample';

ScreenStories.add(
    'home',
    () => (
        <HomeScreenExample />
    )
);
