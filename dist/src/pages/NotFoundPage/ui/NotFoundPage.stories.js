import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';
var meta = {
    title: 'pages/not-found-page',
    component: NotFoundPage,
};
export default meta;
export var Primary = {
    args: {},
};
export var Dark = {
    args: {},
    decorators: [
        function (Story) { return (ThemeDecorator(Theme.DARK)(Story)); },
    ],
};
