import React from 'react'
import MainPage from './MainPage';
import SubPage from './SubPage';
const MainServices = () => {
    return (
        <section className="w-full max-w-screen-2xl mx-auto">
            <ul className="flex mx-24 space-x-8 ">
                <li className="w-2/3">
                    <MainPage />
                </li>
                <li className="w-1/3">
                    <SubPage />
                </li>
            </ul>
        </section>
    )
}

export default MainServices;
