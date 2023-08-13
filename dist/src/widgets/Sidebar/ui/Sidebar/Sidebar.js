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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ArrowIcon from '../../../../shared/assets/icons/arrow.svg';
import cls from './Sidebar.module.scss';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(true), collapsed = _c[0], setCollapsed = _c[1];
    var theme = useTheme().theme;
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx("div", __assign({ className: cls.burgerSwitcher }, { children: _jsx(Button, __assign({ "data-testid": "sidebar-toggle", theme: ThemeButton.CLEAR, onClick: onToggle, className: collapsed
                        ? cls.burgerCollapsed
                        : cls.burgerNotCollapsed }, { children: theme === Theme.DARK
                        ? _jsx(ArrowIcon, { className: cls.ArrowIconDark }, void 0)
                        : _jsx(ArrowIcon, { className: cls.ArrowIconLight }, void 0) }), void 0) }), void 0), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}, void 0), _jsx(LangSwitcher, { className: cls.lang }, void 0)] }), void 0)] }), void 0));
};
