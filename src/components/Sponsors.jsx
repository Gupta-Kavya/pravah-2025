import React from 'react';
import Comingsoon from './Comingsoon';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import Sponsorform from './Sponsorform';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Sponsors = () => {
    const handleButtonClick = () => {
        window.location.href = "/sponsorship-form"; // Replace with your form URL or route
    };

    return (
        <div className="text-gray-900 relative overflow-hidden">
            <Helmet>
                <title>Become a Sponsor - Partner with Aaveg and Pravah | SKIT</title>
                <meta
                    name="description"
                    content="Partner with Aaveg and Pravah at SKIT and showcase your brand at one of the largest sports and cultural fests. Support innovation, creativity, and youth engagement."
                />
                <meta
                    name="keywords"
                    content="Aaveg sponsors, Pravah sponsors, SKIT sponsors, sponsor opportunities, brand partnership, youth fest sponsorship, cultural fest sponsorship, sports fest sponsorship"
                />
                <meta
                    property="og:title"
                    content="Become a Sponsor - Partner with Aaveg and Pravah | SKIT"
                />
                <meta
                    property="og:description"
                    content="Gain valuable exposure and support dynamic sports and cultural events by sponsoring Aaveg and Pravah at SKIT. Connect with a vibrant and energetic audience."
                />
                <meta property="og:url" content="https://pravah.skit.ac.in/skit-pravah-2025-sponsors" />
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
    );
};

export default Sponsors;
