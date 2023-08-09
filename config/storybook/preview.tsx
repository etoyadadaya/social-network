import type { Preview } from '@storybook/react';
import { Story } from '@storybook/blocks';

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
        (Story) => {
            <div></div>
        },
    ],
};

export default preview;
