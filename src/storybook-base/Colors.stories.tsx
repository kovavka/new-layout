import * as React from 'react';
import {storiesOf} from '@storybook/react';
import './colors-story.less'

export const colorsStories = storiesOf('General | Colors', module);

const colors = [
    {
        name: 'bg-color',
        description: 'app background, modal background'
    },
    {
        name: 'primary-text-color',
        description: ''
    },
    {
        name: 'secondary-text-color',
        description: ''
    },
    {
        name: 'color-primary',
        description: 'active states of buttons, tab, etc. + links'
    },
    {
        name: 'color-primary-active',
        description: ':hover & :active for color-primary'
    },
    {
        name: 'color-primary-light',
        description: ''
    },
    {
        name: 'color-secondary',
        description: ''
    },
    {
        name: 'color-secondary-light-1',
        description: ''
    },
    {
        name: 'color-secondary-light-2',
        description: ''
    },
    {
        name: 'color-secondary-light-3',
        description: ''
    },
    {
        name: 'color-secondary-dark',
        description: ''
    },
    {
        name: 'color-success',
        description: ''
    },
    {
        name: 'color-danger',
        description: ''
    },
];

colorsStories.add(
    'all',
    () => (
        <div className="colors-story">
            {colors.map(item => (
                <div key={item.name} className="color-block">
                    <div className="color-rect" style={{backgroundColor: `var(--${item.name})`}} />
                    <div className="color-info">
                        <div className="color-name">{item.name}</div>
                        <div className="color-description">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    ),
    {
        viewport: {
            viewports: {},
        }
    }
);
