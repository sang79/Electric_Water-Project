import React from 'react'
import { Link } from 'react-router-dom'
const OurTeam = () => {
    const team1 = [
        {
            name: 'tạ quang thái',
            position: 'Co-Founde - CMO',
            avatar: '/assets/images/RadaPage/ta quang thai.jpg',
            facebook: <i class="fab fa-facebook-f"></i>,
            twitter: <i class="fab fa-twitter"></i>,
            linkedIn: <i class="fab fa-linkedin-in"></i>,
            link: 'https://twitter.com/thaitq',
            color: '#e96656'
        },
        {
            name: 'mã hoàng hải',
            position: 'Co-Founde - CEO',
            avatar: '/assets/images/RadaPage/Hai.jpg',
            facebook: <i class="fab fa-facebook-f"></i>,
            link: '#',
            color: '#34d293'
        },
        {
            name: 'hoàng văn hậu',
            position: 'Co-Founde - CTO',
            avatar: '/assets/images/RadaPage/Hau.jpg',
            facebook: <i class="fab fa-facebook-f"></i>,
            link: '#',
            color: '#3ab0e2'
        },
        {
            name: 'nguyễn quang vinh',
            position: 'Business Development',
            avatar: '/assets/images/RadaPage/Vinh.jpg',
            facebook: <i class="fab fa-facebook-f"></i>,
            link: '#',
            color: '#f7d861'
        },
    ]
    const team2 = [
        {
            name: 'đỗ mỹ linh',
            position: 'Co-Founder',
            avatar: '/assets/images/RadaPage/My linh.jpg',
            facebook: <i class="fab fa-facebook-f"></i>,
            link: '#',
            color: '#e96656'
        },
        {
            name: 'đào văn tuyển',
            position: 'Marketing team',
            avatar: '/assets/images/RadaPage/Dao van tuyen.jpg',
            facebook: <i class="fab fa-facebook-f"></i>,
            link: '#',
            color: '#34d293'
        },
        {
            name: 'nguyễn thi nhung',
            position: 'Cleaning Service Supervisor',
            avatar: '/assets/images/RadaPage/Nhung Nguyen.jpg',
            facebook: <i class="fab fa-facebook-f"></i>,
            link: '#',
            color: '#3ab0e2'
        },
    ]
    return (
        <section className="mx-auto max-w-screen-2xl">
            <div className="mx-24 space-y-20">
                <div className="">
                    <div className="text-center my-20 space-y-2">
                        <h1 className="uppercase  text-5xl text-gray-700 font-bold">Our team</h1>
                        <p className="font-normal">Get in touch with us! </p>
                    </div>
                </div>
                <div className="space-y-20">
                    <ul className="grid grid-cols-4 gap-6">
                        {team1.map((item, key) => (
                            <li key={key}
                                className="col-span-1 group group-hover:opacity-100 text-center items-center space-y-2">
                                <div className="relative flex cursor-default justify-center pb-10 w-full">
                                    <img style={{ width: 174, height: 174 }}
                                        className="rounded-full"
                                        src={item.avatar} />
                                    <p className="group-hover:opactiy-100 absolute top-0 lef-0 opacity-0 bg-gray-800 text-white text-sm w-full h-full">
                                        Thai has 20 years experience in the IT industry. Before co-founding Rada, Thai was the CEO of EcoIT – a 10-year-old B2G system consultancy and developer in Vietnam. At Rada, Thai is in charge of Marketing & PR.
                                    </p>
                                </div>
                                <h2 className="uppercase font-semibold">{item.name}</h2>
                                <p style={{ backgroundColor: `${item.color}`, height: 2 }}
                                    className="mx-auto w-28 -t-2"></p>
                                <p className="-mt-2 text-sm">{item.position}</p>
                                <ul className="flex justify-center items-center text-gray-500 w-full">
                                    <a href={item.link} >
                                        <li>{item.twitter}</li>
                                    </a>
                                    <li className="mx-4">{item.facebook}</li>
                                    <li>{item.linkedIn}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <ul className="grid grid-cols-3 mx-32 gap-2">
                        {team2.map((item, key) => (
                            <li key={key}
                                className="col-span-1 text-center items-center space-y-2">
                                <div className="flex justify-center pb-10 w-full">
                                    <img style={{ width: 174, height: 174 }}
                                        className="rounded-full"
                                        src={item.avatar} />
                                </div>
                                <h2 className="uppercase font-semibold">{item.name}</h2>
                                <p style={{ backgroundColor: `${item.color}`, height: 2 }}
                                    className="mx-auto w-20 -t-2"></p>
                                <p className="-mt-2 text-sm">{item.position}</p>
                                <li className="text-gray-500">{item.facebook}</li>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex  justify-center">
                    <ul className="w-full space-y-3">
                        <li className="text-2xl text-gray-800 font-medium text-center">Highest prize for Startup in Vietnam IT talent 2017</li>
                        <li className= "flex justify-center">
                            <img src="/assets/images/RadaPage/cong-ty-rada.jpg" />
                        </li>
                        <div className="w-full">
                            <iframe className="w-full" height="315" src="https://www.youtube.com/embed/A8OxpLX3Ydg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurTeam
