import { ChangeEvent, FormEvent, useState } from "react";
import {
    createUserWithGoogleEmailandPassword,
    createCustomUserFromAuth
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import toast from "react-hot-toast";
import "./signup.styles.scss";

const fields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(fields);
    const { displayName, email, password, confirmPassword } = formFields;
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        // formFields[event.target.name] = event.target.value;
    }

    const resetFormFields = () => setFormFields(fields);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (password === confirmPassword) {
                const userCredential = await createUserWithGoogleEmailandPassword(email, password);
                if(userCredential) {
                    const { user } = userCredential;
                    await createCustomUserFromAuth(user, { displayName });
                }
                resetFormFields();
                toast.success('Successfully signed up !');
            } else toast.error('Password not match !');

        } catch (error) {
            toast.error("Error: " + error + " !");
        }
    };
    return (
        <div className="sign-up-container">
            <h2>Don&rsquo;t have an account ?</h2>
            <span>Sign up with email and password</span>
            <form action="POST" onSubmit={handleSubmit}>
                <FormInput
                    label={"Display Name"}
                    type="text" required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
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
                <FormInput
                    label={"Confirm Password"}
                    type="password" required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUp;