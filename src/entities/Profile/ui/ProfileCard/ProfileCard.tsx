import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName: (value?: string) => void;
    onChangeLastName: (value?: string) => void;
    onChangeUserName: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeCity: (value?: string) => void;
    onChangeAvatar: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        readonly,
        error,
        onChangeFirstName,
        onChangeLastName,
        onChangeUserName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.first}
                    onChange={onChangeFirstName}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    onChange={onChangeLastName}
                    placeholder={t('Ваша фамилия')}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    onChange={onChangeUserName}
                    placeholder={t('Ваш никнейм')}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    onChange={onChangeCity}
                    placeholder={t('Ваш город')}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    onChange={onChangeAge}
                    placeholder={t('Ваш возраст')}
                    readonly={readonly}
                    type="number"
                />
                <Input
                    className={cls.input}
                    value={data?.country}
                    placeholder={t('Ваша страна')}
                    readonly={readonly}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    placeholder={t('Ваш аватар')}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
