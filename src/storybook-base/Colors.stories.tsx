import * as React from 'react';
import {storiesOf} from '@storybook/react';
import './colors-story.less'

export const colorsStories = storiesOf('General | Colors', module);

const colors = [
    {
        name: 'bg-color',
        description: 'app background, modal content background'
    },
    {
        name: 'primary-text-color',
        description: 'primary text color'
    },
    {
        name: 'secondary-text-color',
        description: 'font/element colors for active states'
    },
    {
        name: 'color-primary',
        description: 'active states of buttons, tab, etc. + links'
    },
    {
        name: 'color-primary-active',
        description: ':active for color-primary'
    },
    {
        name: 'color-primary-light',
        description: 'only select-yaku-panel__button--pressed'
    },
    {
        name: 'color-primary-light-active',
        description: ':active for color-primary-light'
    },
    {
        name: 'color-secondary-1',
        description: 'flat-btn--pressed, svg-button:active, modal overlay background'
    },
    {
        name: 'color-secondary-2',
        description: 'svg-button--disabled, switch-setting__info'
    },
    {
        name: 'color-secondary-3',
        description: 'bottom panel background'
    },
    {
        name: 'color-secondary-4',
        description: 'main color for borders and placeholders'
    },
    {
        name: 'color-secondary-5',
        description: 'disabled for text/border on light background or zebra'
    },
    {
        name: 'color-secondary-6',
        description: ':active + select-yaku-panel__button--disabled'
    },
    {
        name: 'color-success',
        description: 'pressed win buttons, positive scores'
    },
    {
        name: 'color-danger',
        description: 'pressed lose buttons, negative scores, riichi center circle'
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
