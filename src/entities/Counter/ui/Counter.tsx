import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const Increment = () => {
        dispatch(counterActions.increment());
    };

    const Decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1
                data-testid="value-title"
            >
                {counterValue}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={Increment}
            >
                {t('Плюс')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={Decrement}
            >
                {t('Минус')}
            </Button>
        </div>
    );
};
