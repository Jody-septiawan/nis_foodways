import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    isLogin: false,
    user: []
};

// const initialState = {
//     isLogin: true,
//     user: {
//         email: 'user@gmail.com'
//     }
// };

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "LOGIN_SUCCESS":
            return {
                isLogin: true,
                user: payload
            };
        case "VALID_USER":
            return {
                user: payload,
            };
        case "LOGOUT":
            return {
                isLogin: false,
                user: null
            };
        default:
            throw new Error();
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
};
