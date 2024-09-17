import React from 'react';
import './land.css'
import MainNav from '../components/MainNav';
import PresentationSection from '../components/Presentation';
import LogoContainerSection from '../components/LogoContainer';
import VideoDescriptionCarousel from '../components/library/VideoDescriptionCarousel';
import IndustryContainer from '../components/IndustryContainer';
import Developer from '../components/Developer';
import OpenSource from '../components/OpenSource';

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

        </body>
    );
};

export default Land;