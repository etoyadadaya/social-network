import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { NavbarItemType } from 'widgets/Navbar/model/items';

interface NavbarItemProps {
    item: NavbarItemType;
}

export const NavbarItem = memo((props: NavbarItemProps) => {
    const {
        item,
    } = props;

    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            {t(item.text)}
        </AppLink>
    );
});
