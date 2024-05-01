import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

const Button = ({ children, buttonType, ...otherPros }) => (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherPros}
    >{children}</button>
);

export default Button;