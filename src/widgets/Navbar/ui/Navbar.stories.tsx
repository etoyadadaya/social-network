import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/navbar',
    component: Navbar,
    decorators: [
        (Story) => (
            StoreDecorator({})(Story)
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
};

export const LightAuthorized: Story = {
    args: {},
    decorators: [
        (Story) => (
            StoreDecorator({
                user: { authData: {} },
            })(Story)
        ),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
};

export const DarkAuthorized: Story = {
    args: {},
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
        (Story) => (
            StoreDecorator({
                user: { authData: {} },
            })(Story)
        ),
    ],
};
