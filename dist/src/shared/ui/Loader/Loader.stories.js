import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';
var meta = {
    title: 'shared/loader',
    component: Loader,
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
