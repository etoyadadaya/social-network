import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
import ThemeIcon from '../../../shared/assets/icons/theme.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={() => toggleTheme()}
        >
            { theme === Theme.DARK
                ? <ThemeIcon className={cls.themeIconDark} />
                : <ThemeIcon className={cls.themeIconLight} />}
        </Button>
    );
};
