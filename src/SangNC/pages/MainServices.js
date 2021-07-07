import React from 'react'
import MainPage from './MainPage';
import SubPage from './SubPage';
const MainServices = () => {
    return (
        <section className="w-full max-w-screen-2xl mx-auto">
            <ul className="flex mx-20 space-x-6 ">
                <li className="w-3/4 h-full ">
                    <MainPage />
                </li>
                <li className="w-1/3 h-full">
                    <SubPage />
                </li>
            </ul>
        </section>
    )
}

export default MainServices;
