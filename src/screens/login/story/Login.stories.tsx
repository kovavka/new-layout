import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {LoginErrorScreen} from '../LoginErrorScreen';
import {EnterPinScreen} from '../EnterPinScreen';

ScreenStories.add(
    'login error',
    () => (
        <LoginErrorScreen />
    )
);

ScreenStories.add(
    'enter pin',
    () => (
        <EnterPinScreen />
    )
);
