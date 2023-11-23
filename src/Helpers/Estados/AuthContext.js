import React, { createContext, useContext, useReducer } from 'react';




const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true,user: action.payload.user,allSpaces: action.payload.allSpaces};
    case 'LOGOUT':
      return { ...state, isAuthenticated: false,user: null,allSpaces: [] };
    default:
      return state;
  }
};


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    user:null,
    userSpaces: [],
    isAuthenticated: false,
    allSpaces:[],
  });

  const login = (user, allSpaces) => dispatch({ type: 'LOGIN', payload: { user, allSpaces } });
  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
