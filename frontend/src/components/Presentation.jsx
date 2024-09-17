import React from 'react';
import VideoCarousel from './library/VideoCarousel';


const Presentation = () => {
    return (
        <div className='backdrop-blur-[15px] text-coolgray-600 bg-[#fff9] pt-10 pb-2.5 font-normal leading-[1.3] relative'>
            <div className='border-0 max-w-[1298px] px-6 relative mx-auto block'>
                <div id="hero-container" class="v2-section-title-wrap-home gap-x-[5px] gap-y-[5px] text-center flex flex-col justify-start items-center max-w-[820px] mb-7.5 mx-auto transform-none translate-x-0 opacity-100">
                    <h2 id="w-node-afb06737-da29-f147-ef35-75a2d3d91e11-94801e5c" class="v2-section-title-home-hero-txt mt-0 mb-0 text-[42px] font-medium text-coolgray-900">Everything you need to build and deploy computer vision models.</h2>
                    <div class="v2-section-subtitle-txt v2-hero-home-subtitle text-coolgray-500 text-sm">Used by over 500,000 engineers to create datasets, train models, and deploy to production.</div>
                    <div class="hero-cta-wrapper-btns pt-5 gap-4 flex">
                        <a href="https://app.roboflow.com/" class="v2-primary-new bg-purboflow-500 hover:bg-purboflow-400 transition-colors duration-200 whitespace-nowrap text-ellipsis text-white rounded-lg py-3 px-6">Get Started</a>
                        <a href="/sales" class="v2-primary-new-outline border border-purboflow-500 whitespace-nowrap text-ellipsis text-purboflow-500 rounded-lg py-3 px-6">Get a Demo</a>
                    </div>
                </div>
                <VideoCarousel />
            
            </div>
        </div>
    );
};

export default Presentation;