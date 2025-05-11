import React from 'react';

function Header() {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <img src="/Chef-Icon.png" alt="Chef Claude" className='logo'/>
                <div className='title'>Chef Claude</div>
            </div>
        </nav>
    );
}

export default Header;