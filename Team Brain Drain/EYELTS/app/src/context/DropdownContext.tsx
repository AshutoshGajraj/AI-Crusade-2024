import { createContext, useContext, useState, ReactNode } from 'react';

interface DropdownContextType {
  isAnyDropdownVisible: boolean;
  setIsAnyDropdownVisible: (visible: boolean) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export function DropdownProvider({ children }: { children: ReactNode }) {
  const [isAnyDropdownVisible, setIsAnyDropdownVisible] = useState(false);

  return (
    <DropdownContext.Provider value={{ isAnyDropdownVisible, setIsAnyDropdownVisible }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('useDropdownContext must be used within a DropdownProvider');
  }
  return context;
}