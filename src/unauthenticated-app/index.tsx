import { useState } from "react"
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    return (
        <div>
            {
                isRegistered? <RegisterScreen/> : <LoginScreen/>
            }
            <button onClick={() => setIsRegistered(!isRegistered)}>Change to {isRegistered? 'Login': 'Register'}</button>
        </div>
    );
};