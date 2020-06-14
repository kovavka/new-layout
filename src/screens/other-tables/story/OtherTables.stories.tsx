import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {OtherPlayingTablesScreen} from '../OtherPlayingTablesScreen';

ScreenStories.add(
    'other tables',
    () => (
        <OtherPlayingTablesScreen />
    )
);
