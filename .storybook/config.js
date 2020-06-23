import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs'
import {StoryWrapper} from "../src/storybook-base/StoryWrapper";
import React from "react";
import {loadSpriteAsync} from "../src/services/SpriteLoader";
import { addParameters } from '@storybook/client-api';

const req = require.context('./', true, /stories\..*$/)

addDecorator(withKnobs);

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);

addParameters({
    themes: [
        { name: 'day', class: 'theme-day', color: '#f4f5f7', default: true },
        { name: 'night', class: 'theme-night', color: '#282c34'},
    ],
});

function loadStories () {
    document.body.onload = function () {
        loadSpriteAsync();
    };
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
