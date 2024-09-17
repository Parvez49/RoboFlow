import React from 'react';
import TextAnimation from './library/TextAnimation';
import ImageCarousel from './library/ImageCarousel';

const industries = [
    {
        img: "https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp",
        title: "Security"
    },
    {
        img: "https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp",
        title: "Banking"
    },
    {
        img: "https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp",
        title: "Retail"
    },
    {
        img: "https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp",
        title: "Government"
    },
    {
        img: "https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp",
        title: "Automative"
    },
    {
        img: "https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp",
        title: "Aerospace & Defense"
    },
]


const IndustryContainer = () => {
    return (
        <section className='v2-industry-sect v2-section-industry pt-24 backdrop-blur-[15px] text-coolgray-600 bg-[#fff9] font-normal relative'>
            <div className='w-layout-blockcontainer v2-container-ind v2-home-industry padding w-container max-w-[1298px] relative mx-auto flex flex-col gap-3 justify-center items-start pb-10'>
                <div>
                    <div className='v2-home-industry-title-wrapping flex gap-2 static'>
                        <h2 class="v2-home-industry-title-copy text-coolgray-600 text-4xl font-bold">Thousands of</h2>
                        <div className='v2-home-industry-title-wrap'>
                            <TextAnimation />
                        </div>
                    </div>
                    <h2 class="v2-home-industry-title-copy text-coolgray-600 font-bold text-4xl">rely on Roboflow in their industry.</h2>
                </div>
                <div class="v2-home-industry-sublines-text pb-2">Accelerate your computer vision roadmap with best-in-class tooling and expert guidance. Over half of the Fortune 100 builds with Roboflow.</div>
                <a data-w-id="393fe827-d017-d134-8de9-62e9fa7b5254" href="/industries" class="v2-plain-link w-inline-block bg-coolgray-200 rounded-md px-3 py-2 flex items-center justify-start gap-2 font-normal text-gray-600 text-md">
                    <div class="ind-link">Explore Industry Use Cases</div>
                    <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/66e1a4d84c203f91c582c31f_arrow-home.svg" loading="lazy" alt="" class="image-89"/>
                </a>
            </div>
            <div>
                <ImageCarousel industries={industries} />
            </div>
            <div className='pt-5'>
                <ImageCarousel industries={industries} />
            </div>
        </section>
    );
};

export default IndustryContainer;