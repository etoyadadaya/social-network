import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text
                    title={t('Профиль')}
                />
                <Button
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    placeholder={t('Ваш никнейм')}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('Ваш город')}
                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                />
                <Input
                    className={cls.input}
                    value={data?.country}
                    placeholder={t('Ваша страна')}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    placeholder={t('Ваш аватар')}
                />
            </div>
        </div>
    );
};
