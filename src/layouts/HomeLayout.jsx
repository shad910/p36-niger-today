import React from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <h1>Niger Today</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>&copy; 2024 Niger Today. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default HomeLayout;