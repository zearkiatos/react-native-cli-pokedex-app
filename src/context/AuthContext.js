import React, {useState, useContext, createContext} from 'react';

const AuthContext = createContext({
  user: undefined,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(undefined);

  const login = userData => setAuth(userData);

  const logout = () => setAuth(undefined);

  const valueContext = {
    auth,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
