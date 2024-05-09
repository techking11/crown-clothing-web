import { FC, ButtonHTMLAttributes } from "react";
import "./button.styles.scss";

export enum BUTTON_TYPE_CLASSES {
    google = 'google-sign-in',
    inverted = 'inverted'
};

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES | string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ 
    children, 
    buttonType, 
    ...otherPros }) => (
    <button
        className={`
            button-container 
            ${BUTTON_TYPE_CLASSES[buttonType]}
        `}
        {...otherPros}
    >{children}</button>
);

export default Button;