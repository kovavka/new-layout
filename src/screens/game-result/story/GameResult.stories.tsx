import * as React from 'react';
import {storiesOf} from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import {Test} from './Test';

export const ButtonStories = storiesOf('Screen | Game result', module);
ButtonStories.addDecorator(withKnobs);

const getText =  () => text('sdsddss', 'srr');
const blabla = () => select('fddfdfdf', {
    'dfdfdf': 1,
    'fffff': 2
}, 2);

ButtonStories.add(
    'all',
    () => (
        <div>
            <Test />
        </div>
    )
)
