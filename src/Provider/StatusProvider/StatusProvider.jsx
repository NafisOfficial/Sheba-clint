import  { createContext, useState } from 'react';


export const StatusContext = createContext(null);

const StatusProvider = ({ children }) => {
    // handle navigation drawer status
    const [isDrawerOpened, setDrawerOpen] = useState(false)
    
    //status container
    const statusInfo = {
        isDrawerOpened,
        setDrawerOpen
    }

    return (
        <StatusContext.Provider value={statusInfo}>
            {children}
        </StatusContext.Provider>
    );
};

export default StatusProvider;