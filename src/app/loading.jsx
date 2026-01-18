import Logo from '@/components/layouts/Logo';
import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <h2 className='text-2xl font-bold text-neutral'> Loading </h2>
            <Logo></Logo>
        </div>
    );
};

export default loading;