import React, { InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

// exclude value and onChange from type
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    readonly ?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Input, mods, [className])}>
            <input
                type={type}
                className={cls.form__field}
                placeholder={placeholder}
                onChange={onChangeHandler}
                value={value}
                readOnly={readonly}
                name="name"
                id="name"
                required
            />
            <label htmlFor="name">{placeholder}</label>
        </div>
    );
});
