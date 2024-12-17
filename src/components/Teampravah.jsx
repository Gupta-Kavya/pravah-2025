import React from 'react'
import Comingsoon from './Comingsoon'
import Navbarr from './Navbar'
import DesktopFooter from './DesktopFooter'
import { Helmet } from 'react-helmet'

const Teampravah = () => {
    return (
        <div>
            <Helmet>
                <title>Team Pravah - Meet the Minds Behind the Fest | SKIT</title>
                <meta
                    name="description"
                    content="Meet the dedicated team behind Pravah at SKIT. Discover the passionate individuals who bring creativity, organization, and energy to one of the largest cultural fests."
                />
                <meta
                    name="keywords"
                    content="Team Pravah, Pravah organizers, SKIT team, event coordinators, cultural fest team, youth fest leadership, SKIT Pravah committee"
                />
                <meta
                    property="og:title"
                    content="Team Pravah - Meet the Minds Behind the Fest | SKIT"
                />
                <meta
                    property="og:description"
                    content="Get to know the dynamic team behind Pravah at SKIT. These creative minds and organizers are the driving force behind this incredible cultural fest."
                />
                <meta property="og:url" content="https://pravah.skit.ac.in/the-team-behind-skit-pravah-2025" />
                <meta
                    name="author"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
                <meta
                    name="organization"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
            </Helmet>

            <Navbarr />
            <Comingsoon />
            <DesktopFooter />
        </div>
    )
}

export default Teampravah