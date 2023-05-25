import React from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LangIcon from '../../../shared/assets/icons/language.svg';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            { theme === Theme.DARK
                ?
                <LangIcon className={cls.langIconDark} />
                :
                <LangIcon className={cls.langIconLight} />
            }
        </Button>
    );
};
