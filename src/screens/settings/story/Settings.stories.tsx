import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {SettingsScreen} from '../SettingsScreen';

ScreenStories.add(
    'settings',
    () => (
        <SettingsScreen />
    )
);
