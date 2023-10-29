import {IUserInput, IUserRegister} from "../Interfaces/IUserInput";
import {Helper} from "../Helper";

/**
 * This file is responsible for validating all the input form from the system.
 *
 * @author Christan Jake C. Gatchalian<christan.jake2025@yahoo.com>
 */
export class FormValidation
{
    private errors: string[] = [];
    private allowOnlyOneDot = /^[\w]+(\.[\w]+)?$/;
    /**
     * E-mail regex that allows:
     * letters, numbers, dot (.), underscore (_)
     * but does not allow consecutive dot:
     * dot (.), underscore (_)
     * and should not allow to be on the first string:
     * dot(.), underscore (_)
     *
     * return string[] | null
     */
    private emailRegex = /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    /**
     * Regular expression for fields that has _name
     *
     * This allows:
     * letters, single quote, space, and dash
     */
    private nameRegex = /^[a-zA-Z-' ]+$/;
    private mobileNumberRegex = /^\d{9}$/;

    private fieldRegexMap: { [key: string]: RegExp } = {
        email: this.emailRegex,
        mobile_number: this.mobileNumberRegex,
        _name: this.nameRegex
    };

    private validateField(fieldValue: string, regex: RegExp, requiredMessage: string, invalidMessage: string)
    {
        if (fieldValue.length === 0) {
            this.errors.push(requiredMessage);
        } else if (!regex.test(fieldValue)) {
            this.errors.push(invalidMessage);
        }
    }

    validateLoginForm(formData: IUserInput['userLogin']): string[] | null
    {
        this.errors = [];

        this.validateField(formData.username, this.allowOnlyOneDot, "Username is required.", "String contains more than one period or invalid characters.");
        this.validateField(formData.password, /.*/, "Password is required.", "");

        return this.errors.length > 0 ? this.errors : null;
    }

    validateRegistrationForm(formData: any): string[] | null {
        this.errors = [];
        const helper = new Helper();

        const isStringEmpty = (str: string) => str.trim() === '';

        for (const field in formData) {
            if (formData.hasOwnProperty(field)) {
                const value = formData[field];
                const fieldName = helper.inputFieldToWords(field);

                if (!value || (typeof value === 'string' && isStringEmpty(value))) {
                    this.errors.push(`${fieldName} is required.`);
                } else {
                    this.validateRegisterField(value, field, fieldName);
                }
            }
        }

        return this.errors.length > 0 ? this.errors : null;
    }

    validateRegisterField(value: string, field: string, fieldName: string) {
        for (const key in this.fieldRegexMap) {
            if (field.includes(key) && !this.fieldRegexMap[key].test(value)) {
                this.errors.push(`Invalid ${fieldName} format.`);
                break;
            }
        }
    }


}
