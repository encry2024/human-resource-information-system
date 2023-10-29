import React from 'react';
import axios, {AxiosResponse} from "axios";
import {FormValidation} from "../../Validation/FormValidation";
import {IUserLogin} from "../../Interfaces/IUserInput";

type AuthenticationResult = AxiosResponse | string[] | undefined;

export class Authentication
{
    public async Authenticate(userLoginData: IUserLogin): Promise<AuthenticationResult>
    {
        const validateLogin = new FormValidation();
        const validationErrors = validateLogin.validateLoginForm(userLoginData) ?? [];

        try {
            if (validationErrors.length === 0) {
                const response = await axios.post('/login/authenticate', userLoginData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    return response;
                }
            } else {
                return validationErrors;
            }
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 401) {
                    return [error.response.data.message];
                } else {
                    return [error];
                }
            } else {
                return [`Network error: ${error.message}`];
            }
        }
    }
}
