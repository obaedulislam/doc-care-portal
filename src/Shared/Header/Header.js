import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">DocCare</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Item 1</Link></li>
                        <li><Link>Item 3</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;