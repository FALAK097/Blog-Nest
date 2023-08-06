// what is createContext? https://react.dev/reference/react/useContext
// Explain what createContext does and why we need it.
// createContext is a function that creates a context object.
// A context object is used to share data between components without having to explicitly pass a prop through every level of the tree.
// createContext returns a Provider and a Consumer component.
// The Provider component is used to wrap the components that will have access to the context object.
// The Consumer component is used to access the context object.
// createContext is used to create a context object that will be used to share data between components.

import { createContext, useState } from 'react';

export const UserContext = createContext({});
export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
