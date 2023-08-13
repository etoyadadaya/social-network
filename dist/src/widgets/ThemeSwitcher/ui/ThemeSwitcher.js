var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
import ThemeIcon from '../../../shared/assets/icons/theme.svg';
export var ThemeSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (_jsx(Button, __assign({ theme: ThemeButton.CLEAR, className: classNames(cls.themeSwitcher, {}, [className]), onClick: function () { return toggleTheme(); } }, { children: theme === Theme.DARK
            ? _jsx(ThemeIcon, { className: cls.themeIconDark }, void 0)
            : _jsx(ThemeIcon, { className: cls.themeIconLight }, void 0) }), void 0));
};
