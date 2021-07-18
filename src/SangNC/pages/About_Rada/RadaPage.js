import React from 'react'
import ActiveServices from './ActiveServices'
import Header from './Header'
import IntroduceRada from './IntroduceRada'
import OurTeam from './OurTeam'
import WhatWeDo from './WhatWeDo'
import WhyUs from './WhyUs'
import Footer from './Footer'
const RadaPage = () => {
    return (
        <section>
            <Header />
            <IntroduceRada />
            <WhyUs />
            <WhatWeDo />
            <OurTeam />
            <ActiveServices />
            <Footer />
        </section>
    )
}

export default RadaPage
