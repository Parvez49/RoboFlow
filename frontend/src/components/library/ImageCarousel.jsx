import React from 'react';

const ImageCarousel = ({industries}) => {
    return (
        <div className='indutry-container flex flex-col static gap-6'>
                <div className="industry-wrapper-new flex flex-col gap-9 relative overflow-hidden">
                    <div className="industry-scrool-container-2 w-[240vw] -ml-[100px] flex">
                        <div className="v2-industry-slider h-[150px] w-[50%] flex animate-scroll-right">
                            {industries.map((industry,index)=>(
                                <a href="/industries/safety-and-security" class="industry-link-block-copy w-inline-block h-full mx-2 border border-coolgray-200 rounded-xl overflow-hidden max-w-full inline-block shadow-[2px_2px_10px_rgba(0,0,0,0.3)]">
                                <div class="industry-thumbnail-container-copy h-full relative">
                                    <img src={industry.img}  class="industry-scroll-img w-[26rem] object-cover overflow-clip rounded-lg inline-block max-w-full align-middle" loading="eager" sizes="(max-width: 479px) 43vw, (max-width: 991px) 31vw, 18vw" srcset="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security-p-500.webp 500w, https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security-p-800.webp 800w, https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp 1000w" alt="Orange pickup trucks parked along a concrete wall, with bounding boxes drawn around the closed doors, and a red box labeled &quot;door open&quot; around a partially open garage door. " />
                                    <div class="industry-label-copy flex items-end justify-start w-full h-full overflow-visible absolute top-auto right-auto bottom-0 left-0 hover:bg-coolgray-500 hover:bg-opacity-30 z-10">
                                        <div class="industry-label-text-copy backdrop-blur-[1px] p-3 bg-[#0003] text-white block w-full">{industry.title}</div>
                                    </div>
                                </div>
                            </a>
                            ))}

                        </div>
                        <div className="v2-industry-slider h-[150px] w-[50%] flex animate-scroll-right">
                            {industries.map((industry,index)=>(
                                <a href="/industries/safety-and-security" class="industry-link-block-copy w-inline-block h-full mx-2 border border-coolgray-200 rounded-xl overflow-hidden max-w-full inline-block shadow-[2px_2px_10px_rgba(0,0,0,0.3)]">
                                <div class="industry-thumbnail-container-copy h-full relative">
                                    <img src={industry.img}  class="industry-scroll-img w-[26rem] object-cover overflow-clip rounded-lg inline-block max-w-full align-middle" loading="eager" sizes="(max-width: 479px) 43vw, (max-width: 991px) 31vw, 18vw" srcset="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security-p-500.webp 500w, https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security-p-800.webp 800w, https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/62193badc0fb0c21f13849bd_gov_security.webp 1000w" alt="Orange pickup trucks parked along a concrete wall, with bounding boxes drawn around the closed doors, and a red box labeled &quot;door open&quot; around a partially open garage door. " />
                                    <div class="industry-label-copy flex items-end justify-start w-full h-full overflow-visible absolute top-auto right-auto bottom-0 left-0 hover:bg-coolgray-500">
                                        <div class="industry-label-text-copy backdrop-blur-[1px] p-3 bg-[#0003] text-white block w-full">{industry.title}</div>
                                    </div>
                                </div>
                            </a>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ImageCarousel;