import type { Preview } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
        (Story) => (
            RouterDecorator(Story)
        ),
    ],
};

export default preview;
