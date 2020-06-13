import * as React from 'react';
import {storiesOf} from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import {GameResultScreen} from '../GameResultScreen';

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
            <GameResultScreen />
        </div>
    )
)
