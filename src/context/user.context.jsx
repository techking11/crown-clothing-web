import { createContext, useEffect, useReducer } from "react"; // useState
import { createCustomUserFromAuth, onAuthStateChangeedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const SET_CURRENT_USER = {
    SET_CURRENT_USER: "SET CURRENT USER",
};

const userReducer = ( state, action ) => {
    const { type, payload } = action;
    
    switch (type) {
        case SET_CURRENT_USER.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return false;
    }
}

const initialState = {
    currentUser: null
};

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    
    const [ { currentUser }, dispatch ] = useReducer(userReducer, initialState);
    
    const setCurrentUser = (user) => {
        dispatch({ type: SET_CURRENT_USER.SET_CURRENT_USER, payload: user });
    }
    
    useEffect(() => {
        // const unsubscribe =  
        onAuthStateChangeedListener((user)=> {
            if (user) createCustomUserFromAuth(user);
            setCurrentUser(user);
        });
        // return unsubscribe;
    }, []);
    
    const value = { currentUser, setCurrentUser };
    
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
};