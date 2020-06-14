import * as React from 'react';
import {GameResultScreen} from '../GameResultScreen';
import {ScreenStories} from '../../../storybook-base/StoryVars';

ScreenStories.add(
    'game result',
    () => (
        <GameResultScreen />
    )
);
