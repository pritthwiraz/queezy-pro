import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className='flex justify-between px-5 py-3 bg-cyan-800'>
            <h1><span className='text-orange-500 text-3xl font-bold'>Quizy</span><span className='text-blue-500 text-3xl font-bold'>Pro</span></h1>
        <div className=''>
            <Link className='px-2'to='/'>Home</Link>
            <Link className='px-2'to='/blog'>Blog</Link>
            <Link className='px-2'to='/statistics'>Statistics</Link>
            <Link className='px-2'to='/about'>About</Link>
        </div>          
        </nav>
    );
};

export default Header;