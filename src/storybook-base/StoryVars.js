import {storiesOf} from '@storybook/react';

export const ScreenStories = storiesOf('Screen', module);
export const TableStories = storiesOf('Table', module);

export const CUSTOM_VIEWPORTS = {
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

ScreenStories.addParameters({viewport: {
    viewports: CUSTOM_VIEWPORTS,
}});

TableStories.addParameters({viewport: {
    viewports: CUSTOM_VIEWPORTS,
}});
