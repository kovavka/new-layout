import * as React from 'react';
import {LogScreenExample} from './LogScreenExample';
import {ScreenStories} from '../../../storybook-base/StoryVars';

ScreenStories.add(
    'log',
    () => (
        <LogScreenExample />
    )
);
