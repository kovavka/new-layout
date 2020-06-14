import * as React from 'react';
import {ScreenStories} from '../../../storybook-base/StoryVars';
import {SelectHandScreenExample} from './SelectHandScreenExample';
import {SelectYakuScreenExample} from './SelectYakuScreenExample';

ScreenStories.add(
    'select yaku',
    () => (
        <SelectYakuScreenExample />
    )
);

ScreenStories.add(
    'select hand',
    () => (
        <SelectHandScreenExample />
    )
);
