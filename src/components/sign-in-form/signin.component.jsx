import { useState } from "react";
import {
    createCustomUserFromAuth,
    signInWithGooglePopup,
    signinUserWithGoogleEmailandPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import "./signin.styles.scss";
import Button from "../button/button.component";
import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { emailSigninStart, googleSigninStart } from "../../store/user/user.action";

const fields = {
    email: "",
    password: ""
};


const SignIn = () => {
    // const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(fields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        // formFields[event.target.name] = event.target.value;
    }

    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            await createCustomUserFromAuth(user);
        } catch (error) {
            toast.error(error.message);
        }
        // dispatch(googleSigninStart());
    }

    const resetFormFields = () => setFormFields(fields);7

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signinUserWithGoogleEmailandPassword(email, password);
            // dispatch(emailSigninStart(email, password));
            resetFormFields();
            toast.success('Successfully signed in !');
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-credential":
                    toast.error('Check your credentials !');
                    break;
                default:
                    toast.error("Error: " + error.message + " !");
                    break;
            }
        }
    };
    return (
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign in with email and password</span>
            <form action="POST" onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    type="email" required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label={"Password"}
                    type="password" required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className="button-containers">
                    <Button type="submit">Sign in</Button>
                    <Button buttonType="google" onClick={logGoogleUser}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;