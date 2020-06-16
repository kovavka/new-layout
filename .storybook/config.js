import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs'
import {StoryWrapper} from "../src/storybook-base/StoryWrapper";
import React from "react";
import {loadSpriteAsync} from "../src/services/SpriteLoader";
import { addParameters } from '@storybook/client-api';

const req = require.context('./', true, /stories\..*$/)


addDecorator(withKnobs);

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);


const customViewports = {
    iPhoneSE: {
        name: 'IPhone SE',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
    iPhone8: {
        name: 'IPhone 8',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    iPhoneX: {
        name: 'IPhone X',
        styles: {
            width: '375px',
            height: '812px',
        },
    },
    iPad: {
        name: 'IPad',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
};
addParameters({
    viewport: {
        viewports: customViewports,
    },
});

function loadStories () {
    document.body.onload = function () {
        loadSpriteAsync();
    };
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
