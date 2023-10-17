import React from "react";
import { v4 as uuidV4 } from 'uuid';

interface IErrorElementProps {
    errorMessages: string[];
}

const ErrorElement: React.FC<IErrorElementProps> = ({ errorMessages }) => {
    const isHidden = errorMessages.length === 0;

    return (
        <div className={`bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 ${isHidden ? 'hidden' : ''}`} role="alert" id="error_alert">
            {Array.isArray(errorMessages) && errorMessages.length > 0 ? (
                errorMessages.map((message) => (
                    <p key={uuidV4()}>{message}</p>
                ))
            ) : null}
        </div>
    );
};

export default ErrorElement;
