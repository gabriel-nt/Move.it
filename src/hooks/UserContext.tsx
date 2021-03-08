import { createContext, useEffect, useState } from 'react';

interface IRequest {
  avatar_url: string;
  name: string;
}

interface UserContextData {
  user: UserProps | undefined;
  logout: () => void;
  login: (user: IRequest) => void;
}

interface UserProps {
  image: string;
  name: string;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | undefined>();

  useEffect(() => {
    const storage = localStorage.getItem('login');

    if (storage) {
      setUser(JSON.parse(storage));
    }
  }, []);

  function logout() {
    localStorage.removeItem('login');
    setUser(undefined);
  }

  function login(data: IRequest) {
    const storage = {
      name: data.name,
      image: data.avatar_url,
    };

    setUser(storage);
    localStorage.setItem('login', JSON.stringify(storage));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
