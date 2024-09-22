import React from 'react';

const SecurityContainer = () => {
    return (
        <section className='v2-security-container v2-home-security v2-bkg-coolgray-50 bg-[linear-gradient(180deg,#f3f4f6,white)] backdrop-filter-none bg-white text-coolgray-600 py-32 font-normal relative block'>
            <div className='w-layout-blockcontainer v2-container v2-sec-container w-container max-w-[1298px] px-6 block mx-auto'>
                <div className='sec-section security-wrapper flex flex-col relative gap-7'>
                    <div class="title-wrapper v2-security-title flex flex-col gap-3">
                        <h2 class="sec-header text-coolgray-900 flex text-4xl">Scalable, reliable, and secure.</h2>
                        <div class="sec-subline-text">Roboflow is built for security, with enterprise grade infrastructure and compliance always in mind.</div>
                    </div>
                    <div class="subline-wrapper security-sublines flex flex-col gap-7 items-start max-w-[40%]">
                        <div class="sec-bullets-wrapper flex items-center gap-2 justify-start">
                            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/66c4dc0825bbfbbef86fbec7_icon-circle-check-coolgray-600.svg" loading="lazy" alt="" class="v2-home-security-icon sec-lock check" />
                            <div class="sec-bullets-text">Compliant with SOC2 Type 2 requirements.</div>
                        </div>
                        <div class="sec-bullets-wrapper flex items-start gap-2 justify-start">
                            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/66de5356ef3f2fd87eb8d62c_gray-lock.svg" loading="lazy" alt="" class="v2-home-security-icon lock pt-1" />
                            <div class="sec-bullets-text">Data is encrypted in transit and at rest, with SSL transport receiving a grade A+ rating from Qualys.</div>
                        </div>
                        <div class="sec-bullets-wrapper flex items-start gap-2 justify-start">
                            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/66de53788e0f0eb07882917f_caduceus.svg" loading="lazy" alt="" class="v2-home-security-icon caduceus _3 pt-1" />
                            <div class="sec-bullets-text">HIPAA Compliant infrastructure, including the ability to execute BAAs.</div>
                        </div>
                    </div>
                    <a data-w-id="03948a99-dbd3-c722-1096-63f321d1cab2" href="/enterprise" class="v2-plain-link w-inline-block flex gap-2 items-center justify-start bg-[rgba(0,0,0,0.05)] py-2 px-3 w-max rounded-lg hover:bg-[rgba(0,0,0,0.15)] transition-colors duration-200">
                        <div class="sec-link">View More Enterprise Features</div>
                        <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/66e1a4d84c203f91c582c31f_arrow-home.svg" loading="lazy" alt="" class="arrow-home" />
                    </a>
                </div>
                {/* <div className='security-cards-badges top z-[2] flex top-0 right-[-80px] scale-[0.8]'>
                    <div class="top-top-wraper flex gap-12">
                        <a href="/" target="_blank" class="v2-security-wrapper sec-card w-inline-block inline-block max-w-full w-36 h-52 p-1 relative">
                            <div class="aicpa-bg z-0 opacity-0 hover:opacity-100 bg-[linear-gradient(#a73d6b,#703084)] rounded-[6px] justify-start items-start w-full h-full flex absolute inset-0"></div>
                            <div class="v2-home-security-badge border border-[var(--coolgray-200)] bg-[linear-gradient(#fff,#f4f4f4)] rounded-[6px] flex flex-col justify-between items-center w-full h-full pt-[20px] pb-[20px] relative shadow-[2px_3px_5.5px_#0003]">
                                <div class="sec-badges-icon sec-shield w-embed">
                                    <svg width="63" height="68" viewBox="0 0 63 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.8854 5.50425C30.9188 5.06164 32.0813 5.06164 33.1146 5.50425L55.9383 15.2678C57.3979 15.8927 58.3795 17.2856 58.3666 18.8608C58.302 31.0978 53.2775 52.6817 33.1146 62.4062C32.0942 62.9009 30.8929 62.9009 29.8725 62.4062C9.70962 52.6687 4.69797 31.0848 4.63338 18.8478C4.62047 17.2726 5.60213 15.8797 7.06171 15.2548L29.8854 5.49123V5.50425ZM34.7292 1.66392C32.6625 0.778693 30.3375 0.778693 28.2708 1.66392L5.44713 11.4275C2.60547 12.6382 0.487142 15.4631 0.500059 18.8738C0.564642 31.7877 5.83463 55.4155 28.09 66.1554C30.2471 67.1969 32.7529 67.1969 34.91 66.1554C57.1654 55.4155 62.4354 31.7877 62.4999 18.8738C62.5129 15.4631 60.3945 12.6382 57.5529 11.4275L34.7292 1.66392ZM45.3596 27.1142C46.1604 26.3071 46.1604 24.9793 45.3596 24.1722C44.5587 23.365 43.2412 23.365 42.4404 24.1722L27.3667 39.3642L20.5596 32.5037C19.7588 31.6966 18.4413 31.6966 17.6404 32.5037C16.8396 33.3108 16.8396 34.6387 17.6404 35.4458L25.9071 43.7774C26.7079 44.5845 28.0254 44.5845 28.8263 43.7774L45.3596 27.1142Z" fill="currentColor" stroke="white"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_113_961" x1="28.1485" y1="4.09078" x2="31.5" y2="128.5" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#9CA3AF"></stop>
                                                <stop offset="1" stop-color="#6B7280"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="v2-home-security-card-text-wrapper flex justify-center items-center flex-col gap-1">
                                    <div class="sec-badge-titles aicpa-title  text-lg font-medium">AICPA</div>
                                    <div class="v2-home-security-card-subline aicpa-subline text-sm font-normal">SOC&nbsp;2 Type 2</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div> */}
                
            </div>
        </section>
    );
};

export default SecurityContainer;