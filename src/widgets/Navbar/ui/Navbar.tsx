import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                    className={cls.aboutLink}
                >
                    {t('О сайте')}
                </AppLink>
                <Button
                    onClick={onToggleModal}
                    theme={ThemeButton.CLEAR}
                    className={cls.links}
                >
                    {t('Войти')}
                </Button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    TEST TEXT, TEXT TEST
                </Modal>
            </div>
        </div>
    );
};
