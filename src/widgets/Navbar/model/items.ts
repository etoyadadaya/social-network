import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface NavbarItemType {
    path: string;
    text: string;
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const NavbarItemsList: NavbarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
    },
];
