import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs'
import {StoryWrapper} from "../src/storybook-base/StoryWrapper";
import React from "react";
import {loadSpriteAsync} from "../src/services/SpriteLoader";
import {StateService} from "../src/services/StateService";

const req = require.context('./', true, /stories\..*$/)


addDecorator(withKnobs);

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);


function loadStories () {
    document.body.onload = function () {
        loadSpriteAsync();
        // new StateService();
    };
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
