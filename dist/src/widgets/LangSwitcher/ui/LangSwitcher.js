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
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './LangSwitcher.module.scss';
import LangIcon from '../../../shared/assets/icons/language.svg';
export var LangSwitcher = function (_a) {
    var className = _a.className;
    var i18n = useTranslation().i18n;
    var theme = useTheme().theme;
    var toggle = function () {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (_jsx(Button, __assign({ className: classNames(cls.langSwitcher, {}, [className]), theme: ThemeButton.CLEAR, onClick: toggle }, { children: theme === Theme.DARK
            ? _jsx(LangIcon, { className: cls.langIconDark }, void 0)
            : _jsx(LangIcon, { className: cls.langIconLight }, void 0) }), void 0));
};
