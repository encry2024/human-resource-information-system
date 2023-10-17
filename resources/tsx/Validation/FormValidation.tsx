import {ILoginForm} from "../model/User/Login";

export class FormValidator {
    private errors: string[] = [];
    private allowOnlyOneDot = /^[\w]+(\.[\w]+)?$/

    validateLoginForm(formData: ILoginForm): string[] | null {
        this.errors = [];
        
        if (formData.username.length === 0) {
            this.errors.push("Username is required.");
        } else if (!this.allowOnlyOneDot.test(formData.username)) {
            this.errors.push("String contains more than one period or invalid characters.");
        }

        if (formData.password.length === 0) {
            this.errors.push("Password is required.");
        }

        if (this.errors.length > 0) {
            return this.errors;
        }

        return null; // Form is valid
    }
}
