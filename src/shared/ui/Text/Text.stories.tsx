import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/text',
    component: Text,
    args: {
        text: 'TEXT',
        title: 'TITLE',
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
    args: {},
};

export const LightOnlyTitle: Story = {
    args: {
        title: 'Title light',
    },
};

export const LightOnlyText: Story = {
    args: {
        text: 'Text light',
    },
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
};

export const DarkOnlyTitle: Story = {
    args: {
        title: 'Title dark',
    },
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
};

export const DarkOnlyText: Story = {
    args: {
        text: 'Text dark',
    },
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
};

export const Error: Story = {
    args: {
        theme: TextTheme.ERROR,
    },
};
