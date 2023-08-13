import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';
var meta = {
    title: 'shared/app-link',
    component: AppLink,
    args: {
        to: '/',
    },
};
export default meta;
export var Primary = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
export var Secondary = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export var PrimaryDark = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        function (Story) { return (ThemeDecorator(Theme.DARK)(Story)); },
    ],
};
export var SecondaryDark = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        function (Story) { return (ThemeDecorator(Theme.DARK)(Story)); },
    ],
};
