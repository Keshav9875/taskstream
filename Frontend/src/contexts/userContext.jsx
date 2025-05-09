import { createContext, useState } from "react";

export const userContext = createContext();


// this is user context -> store user data
export const UserProvider = ({ children }) => {
   const [user, setUser] = useState({ name: "", email: "", id: "", token: "" }); 
   return <userContext.Provider value={[user, setUser]}>{children}</userContext.Provider>;
};
