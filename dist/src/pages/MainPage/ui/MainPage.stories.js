import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
var meta = {
    title: 'pages/main-page',
    component: MainPage,
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
