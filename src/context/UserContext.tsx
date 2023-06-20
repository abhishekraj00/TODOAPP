import React, {createContext, useState, ReactNode} from 'react';

export interface UserContextProps {
  user: string;
  setUser: (user: string) => void;
}

export const userContext = createContext<UserContextProps>({
  user: '',
  setUser: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({children}) => {
  const [user, setUser] = useState('Hello');

  return (
    <userContext.Provider value={{user, setUser}}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
