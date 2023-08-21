import { Country } from 'shared/const/common';

export interface Profile {
    'profile': {
        first: string,
        lastname: string,
        age: number,
        country: Country,
        city: string,
        username: string,
        avatar: string,
    }
}

export interface ProfileSchema {
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
}
