import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';
var meta = {
    title: 'widgets/page-loader',
    component: PageLoader,
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
