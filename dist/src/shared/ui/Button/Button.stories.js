import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';
var meta = {
    title: 'shared/button',
    component: Button,
};
export default meta;
export var Primary = {
    args: {
        children: 'Text',
    },
};
export var Clear = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};
export var Outline = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
export var PrimaryDark = {
    args: {
        children: 'Text',
    },
    decorators: [
        function (Story) { return (ThemeDecorator(Theme.DARK)(Story)); },
    ],
};
export var ClearDark = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [
        function (Story) { return (ThemeDecorator(Theme.DARK)(Story)); },
    ],
};
export var OutlineDark = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        function (Story) { return (ThemeDecorator(Theme.DARK)(Story)); },
    ],
};
