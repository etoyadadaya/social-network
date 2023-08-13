import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
var meta = {
    title: 'widgets/sidebar',
    component: Sidebar,
};
export default meta;
export var Light = {
    args: {},
};
export var Dark = {
    args: {},
    decorators: [
        function (Story) { return (ThemeDecorator(Theme.DARK)(Story)); },
    ],
};
