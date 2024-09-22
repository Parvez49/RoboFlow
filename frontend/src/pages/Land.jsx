import React from 'react';
import './land.css'
import MainNav from '../components/MainNav';
import PresentationSection from '../components/Presentation';
import LogoContainerSection from '../components/LogoContainer';
import VideoDescriptionCarousel from '../components/library/VideoDescriptionCarousel';
import IndustryContainer from '../components/IndustryContainer';
import Developer from '../components/Developer';
import OpenSource from '../components/OpenSource';
import SecurityContainer from '../components/SecurityContainer';

const Land = () => {
    return (
        <body>
            <MainNav />
            <PresentationSection />
            <LogoContainerSection />
            <VideoDescriptionCarousel />
            <IndustryContainer />
            <Developer />
            <OpenSource />
            <SecurityContainer />

        </body>
    );
};

export default Land;