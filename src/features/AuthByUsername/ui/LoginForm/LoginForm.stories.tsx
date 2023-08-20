import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/login-form',
    component: LoginForm,
    args: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            StoreDecorator({
                loginForm: {
                    email: '123',
                    password: '123',
                },
            })(Story)
        ),
    ],
};

export const WithErrorLight: Story = {
    args: {},
    decorators: [
        (Story) => (
            StoreDecorator({
                loginForm: {
                    email: '123',
                    password: '123',
                    error: 'error!',
                },
            })(Story)
        ),
    ],
};

export const LightIsLoading: Story = {
    args: {},
    decorators: [
        (Story) => (
            StoreDecorator({
                loginForm: {
                    email: '123',
                    password: '123',
                    isLoading: true,
                },
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
        (Story) => (
            StoreDecorator({
                loginForm: {
                    email: '123',
                    password: '123',
                },
            })(Story)
        ),
    ],
};

export const WithErrorDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
        (Story) => (
            StoreDecorator({
                loginForm: {
                    email: '123',
                    password: '123',
                    error: 'error!',
                },
            })(Story)
        ),
    ],
};

export const DarkIsLoading: Story = {
    args: {},
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
        (Story) => (
            StoreDecorator({
                loginForm: {
                    email: '123',
                    password: '123',
                    isLoading: true,
                },
            })(Story)
        ),
    ],
};
