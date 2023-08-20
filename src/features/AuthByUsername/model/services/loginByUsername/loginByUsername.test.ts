import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    test('successful login', async () => {
        const userValue = { email: '123' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ email: 'admin@gmail.com', password: '1234567890' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('unsuccessful login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ email: 'admin@gmail.com', password: '1234567890' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});

// Без универсальной обертки для теста асинхронных функций

// describe('loginByUsername.test', () => {
//     let dispatch: Dispatch;
//     let getState: () => StateSchema;
//
//     beforeEach(() => {
//         dispatch = jest.fn();
//         getState = jest.fn();
//     });
//
//     test('successful login', async () => {
//         const userValue = { email: '123' };
//         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
//
//         const action = loginByUsername({ email: 'admin@gmail.com', password: '1234567890' });
//         const result = await action(dispatch, getState, undefined);
//
//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('fulfilled');
//         expect(result.payload).toEqual(userValue);
//     });
//
//     test('unsuccessful login', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//
//         const action = loginByUsername({ email: 'admin@gmail.com', password: '1234567890' });
//         const result = await action(dispatch, getState, undefined);
//
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('rejected');
//         expect(result.payload).toBe('error');
//     });
// });
