export class IUserInput {
    userLogin: IUserLogin;
    userRegister: IUserRegister;

    constructor() {
        this.userLogin = {
            username: '',
            password: '',
        };
        this.userRegister = {
            first_name: '',
            middle_name: '',
            last_name: '',
            date_of_birth: new Date("00-00-0000"),
            phone_number: '',
            mobile_number: '',
            email: '',
            address: '',
            country_id: 0,
            postal_code: 0
        };
    }
}

export interface IUserLogin {
    username: string;
    password: string;
}

export interface IUserRegister {
    first_name: string;
    middle_name: string;
    last_name: string;
    date_of_birth: Date;
    phone_number: string;
    mobile_number: string;
    email: string;
    address: string;
    country_id: number;
    postal_code: number;
}
