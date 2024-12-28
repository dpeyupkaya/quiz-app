import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const authContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('API Yanıtı:', res.data);

        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('API Hatası:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
