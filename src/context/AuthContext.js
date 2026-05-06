import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// This is the provider that will wrap your app
export function AuthProvider({ children }) {
  // Stores the logged-in user info (or null if not logged in)
  const [user, setUser] = useState(null);

  // Function to log in
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Function to log out
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth anywhere in your app
export function useAuth() {
  return useContext(AuthContext);
}