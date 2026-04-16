import CallProvider from '@/Context/CallProvider';
import React from 'react';

const Providers = ({children}) => {
    return (
        <div>
            <CallProvider>{children}</CallProvider>
        </div>
    );
};

export default Providers;