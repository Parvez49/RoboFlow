import React from 'react';
import './OpenSource.css'

// style={{boxShadow: 'rgba(0, 0, 0, 0) 2px 2px 10px 0px', backgroundImage: 'linear-gradient(rgb(103, 6, 206), rgb(0, 0, 0))'}}
// style={{backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.8), rgba(0, 0, 0, 0.8))'}}

const OpenSource = () => {
    return (
        <section className='v2-section-120-copy v2-home-open-source overflow-hidden bg-coolgray-900 py-32 relative font-normal backdrop-blur-lg block'>
            <div className='w-layout-blockcontainer v2-container w-container max-w-[1298px] px-6 mx-auto relative'>
                <div className='v2-home-open-content-wrapper-copy w-full max-w-full block relative z-10'>
                    <div className='open-source-content-wrapper flex flex-col gap-14 justify-start items-center pt-72 relative w-full'>
                        <h3 class="v2-home-open-title-copy title-sm hidden">Built with the industry standard open source libraries.</h3>
                        <div class="top-cards-wrapper flex gap-6 w-full items-center justify-center">
                            <div class="v2-open-card-gradient-wrapper rounded-lg shadow-[2px_2px_10px_0px_rgba(0,0,0,0)] hover:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[rgb(103,6,206)] to-[rgba(0,0,0)] hover:bg-gradient-to-b hover:from-[rgba(163,81,251)] hover:to-[rgba(17,24,29,0.8)]">
                                <a href="/" target="_blank" class="v2-home-open-card-wrapper w-inline-block w-[350px] p-6 flex items-start justify-center flex-col max-w-full bg-gradient-to-b from-[rgba(17,24,39,0.8)] to-[rgba(0,0,0,0.8)] hover:bg-gradient-to-b hover:from-[rgba(17,24,39,0.7)] hover:to-[rgba(0,0,0,0.6)]" >
                                    <div class="v2-home-open-card-title flex gap-1">
                                        <div class="v2-home-open-card-title-robo text-purple-400 text-lg font-normal opacity-60">roboflow /</div>
                                        <div class="v2-home-open-card-title-repo text-coolgray-50 text-[20px] font-medium text-right">supervision</div>
                                    </div>
                                    <div class="v2-home-open-card-desc text-coolgray-400 opacity-80 text-left text-sm font-light no-underline mt-2">A range of utilities to help integrate computer vision into your application, covering functions from annotation to object tracking.</div>
                                    <div class="div-block-236-copy-copy flex gap-3 mt-2">
                                        <div class="v2-home-open-card-subinfo-wrapper flex gap-2 items-center justify-start text-coolgray-400 text-sm">
                                            <div class="v2-home-open-card-icon w-embed">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.16572 0.375C6.38057 0.375 6.55244 0.503906 6.63838 0.675781L8.1208 3.70508L11.4079 4.19922C11.6013 4.2207 11.7517 4.34961 11.8161 4.54297C11.8806 4.73633 11.8376 4.92969 11.6872 5.08008L9.30244 7.44336L9.86104 10.7734C9.904 10.9668 9.81807 11.1816 9.66768 11.2891C9.4958 11.3965 9.28096 11.418 9.10908 11.332L6.16572 9.74219L3.24385 11.332C3.05049 11.418 2.85713 11.3965 2.68525 11.2891C2.53486 11.1602 2.44893 10.9668 2.49189 10.7734L3.05049 7.44336L0.665723 5.08008C0.515332 4.92969 0.472363 4.73633 0.536816 4.54297C0.60127 4.37109 0.75166 4.2207 0.94502 4.19922L4.23213 3.70508L5.71455 0.675781C5.80049 0.503906 5.97236 0.375 6.16572 0.375ZM6.16572 2.07227L5.04854 4.41406C4.9626 4.56445 4.83369 4.67188 4.66182 4.69336L2.12666 5.05859L3.95283 6.88477C4.08174 7.01367 4.14619 7.18555 4.10322 7.33594L3.67354 9.91406L5.92939 8.71094C6.07979 8.625 6.27314 8.625 6.42354 8.71094L8.67939 9.91406L8.24971 7.35742C8.20674 7.18555 8.27119 7.01367 8.4001 6.90625L10.2263 5.05859L7.69111 4.69336C7.51924 4.67188 7.39033 4.56445 7.30439 4.41406L6.16572 2.07227Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v2-home-open-card-subinfo">18.4k Stars</div>
                                        </div>
                                        <div class="v2-home-open-card-subinfo-wrapper flex gap-2 items-center justify-start text-coolgray-400 text-sm">
                                            <div class="v2-home-open-card-icon w-embed">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.71875 2.78125C2.08398 2.78125 2.40625 2.48047 2.40625 2.09375C2.40625 1.72852 2.08398 1.40625 1.71875 1.40625C1.33203 1.40625 1.03125 1.72852 1.03125 2.09375C1.03125 2.48047 1.33203 2.78125 1.71875 2.78125ZM3.4375 2.09375C3.4375 2.86719 2.92188 3.5332 2.23438 3.74805V4.5C2.23438 4.99414 2.59961 5.35938 3.09375 5.35938H6.53125C7.00391 5.35938 7.39062 4.99414 7.39062 4.5V3.74805C6.68164 3.5332 6.1875 2.86719 6.1875 2.09375C6.1875 1.14844 6.93945 0.375 7.90625 0.375C8.85156 0.375 9.625 1.14844 9.625 2.09375C9.625 2.86719 9.10938 3.5332 8.42188 3.74805V4.5C8.42188 5.55273 7.5625 6.39062 6.53125 6.39062H5.32812V8.02344C6.01562 8.23828 6.53125 8.9043 6.53125 9.65625C6.53125 10.623 5.75781 11.375 4.8125 11.375C3.8457 11.375 3.09375 10.623 3.09375 9.65625C3.09375 8.9043 3.58789 8.23828 4.29688 8.02344V6.39062H3.09375C2.04102 6.39062 1.20312 5.55273 1.20312 4.5V3.74805C0.494141 3.5332 0 2.86719 0 2.09375C0 1.14844 0.751953 0.375 1.71875 0.375C2.66406 0.375 3.4375 1.14844 3.4375 2.09375ZM7.90625 2.78125C8.27148 2.78125 8.59375 2.48047 8.59375 2.09375C8.59375 1.72852 8.27148 1.40625 7.90625 1.40625C7.51953 1.40625 7.21875 1.72852 7.21875 2.09375C7.21875 2.48047 7.51953 2.78125 7.90625 2.78125ZM5.5 9.65625C5.5 9.29102 5.17773 8.96875 4.8125 8.96875C4.42578 8.96875 4.125 9.29102 4.125 9.65625C4.125 10.043 4.42578 10.3438 4.8125 10.3438C5.17773 10.3438 5.5 10.043 5.5 9.65625Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v2-home-open-card-subinfo">1.4k Forks</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <h3 class="v2-home-open-title-copy title-bg px-3 text-white text-left w-auto text-2xl font-light flex">Built with industry standard open source libraries.</h3>
                            <div class="v2-open-card-gradient-wrapper rounded-lg shadow-[2px_2px_10px_0px_rgba(0,0,0,0)] hover:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[rgb(103,6,206)] to-[rgba(0,0,0)] hover:bg-gradient-to-b hover:from-[rgba(163,81,251)] hover:to-[rgba(17,24,29,0.8)]">
                                <a href="/" target="_blank" class="v2-home-open-card-wrapper w-inline-block w-[350px] p-6 flex items-start justify-center flex-col max-w-full bg-gradient-to-b from-[rgba(17,24,39,0.8)] to-[rgba(0,0,0,0.8)] hover:bg-gradient-to-b hover:from-[rgba(17,24,39,0.7)] hover:to-[rgba(0,0,0,0.6)]" >
                                    <div class="v2-home-open-card-title flex gap-1">
                                        <div class="v2-home-open-card-title-robo text-purple-400 text-lg font-normal opacity-60">roboflow /</div>
                                        <div class="v2-home-open-card-title-repo text-coolgray-50 text-[20px] font-medium text-right">supervision</div>
                                    </div>
                                    <div class="v2-home-open-card-desc text-coolgray-400 opacity-80 text-left text-sm font-light no-underline mt-2">A range of utilities to help integrate computer vision into your application, covering functions from annotation to object tracking.</div>
                                    <div class="div-block-236-copy-copy flex gap-3 mt-2">
                                        <div class="v2-home-open-card-subinfo-wrapper flex gap-2 items-center justify-start text-coolgray-400 text-sm">
                                            <div class="v2-home-open-card-icon w-embed">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.16572 0.375C6.38057 0.375 6.55244 0.503906 6.63838 0.675781L8.1208 3.70508L11.4079 4.19922C11.6013 4.2207 11.7517 4.34961 11.8161 4.54297C11.8806 4.73633 11.8376 4.92969 11.6872 5.08008L9.30244 7.44336L9.86104 10.7734C9.904 10.9668 9.81807 11.1816 9.66768 11.2891C9.4958 11.3965 9.28096 11.418 9.10908 11.332L6.16572 9.74219L3.24385 11.332C3.05049 11.418 2.85713 11.3965 2.68525 11.2891C2.53486 11.1602 2.44893 10.9668 2.49189 10.7734L3.05049 7.44336L0.665723 5.08008C0.515332 4.92969 0.472363 4.73633 0.536816 4.54297C0.60127 4.37109 0.75166 4.2207 0.94502 4.19922L4.23213 3.70508L5.71455 0.675781C5.80049 0.503906 5.97236 0.375 6.16572 0.375ZM6.16572 2.07227L5.04854 4.41406C4.9626 4.56445 4.83369 4.67188 4.66182 4.69336L2.12666 5.05859L3.95283 6.88477C4.08174 7.01367 4.14619 7.18555 4.10322 7.33594L3.67354 9.91406L5.92939 8.71094C6.07979 8.625 6.27314 8.625 6.42354 8.71094L8.67939 9.91406L8.24971 7.35742C8.20674 7.18555 8.27119 7.01367 8.4001 6.90625L10.2263 5.05859L7.69111 4.69336C7.51924 4.67188 7.39033 4.56445 7.30439 4.41406L6.16572 2.07227Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v2-home-open-card-subinfo">18.4k Stars</div>
                                        </div>
                                        <div class="v2-home-open-card-subinfo-wrapper flex gap-2 items-center justify-start text-coolgray-400 text-sm">
                                            <div class="v2-home-open-card-icon w-embed">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.71875 2.78125C2.08398 2.78125 2.40625 2.48047 2.40625 2.09375C2.40625 1.72852 2.08398 1.40625 1.71875 1.40625C1.33203 1.40625 1.03125 1.72852 1.03125 2.09375C1.03125 2.48047 1.33203 2.78125 1.71875 2.78125ZM3.4375 2.09375C3.4375 2.86719 2.92188 3.5332 2.23438 3.74805V4.5C2.23438 4.99414 2.59961 5.35938 3.09375 5.35938H6.53125C7.00391 5.35938 7.39062 4.99414 7.39062 4.5V3.74805C6.68164 3.5332 6.1875 2.86719 6.1875 2.09375C6.1875 1.14844 6.93945 0.375 7.90625 0.375C8.85156 0.375 9.625 1.14844 9.625 2.09375C9.625 2.86719 9.10938 3.5332 8.42188 3.74805V4.5C8.42188 5.55273 7.5625 6.39062 6.53125 6.39062H5.32812V8.02344C6.01562 8.23828 6.53125 8.9043 6.53125 9.65625C6.53125 10.623 5.75781 11.375 4.8125 11.375C3.8457 11.375 3.09375 10.623 3.09375 9.65625C3.09375 8.9043 3.58789 8.23828 4.29688 8.02344V6.39062H3.09375C2.04102 6.39062 1.20312 5.55273 1.20312 4.5V3.74805C0.494141 3.5332 0 2.86719 0 2.09375C0 1.14844 0.751953 0.375 1.71875 0.375C2.66406 0.375 3.4375 1.14844 3.4375 2.09375ZM7.90625 2.78125C8.27148 2.78125 8.59375 2.48047 8.59375 2.09375C8.59375 1.72852 8.27148 1.40625 7.90625 1.40625C7.51953 1.40625 7.21875 1.72852 7.21875 2.09375C7.21875 2.48047 7.51953 2.78125 7.90625 2.78125ZM5.5 9.65625C5.5 9.29102 5.17773 8.96875 4.8125 8.96875C4.42578 8.96875 4.125 9.29102 4.125 9.65625C4.125 10.043 4.42578 10.3438 4.8125 10.3438C5.17773 10.3438 5.5 10.043 5.5 9.65625Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v2-home-open-card-subinfo">1.4k Forks</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="bottom-cards-wrapper flex items-center justify-start gap-20">
                            <div class="v2-open-card-gradient-wrapper rounded-lg shadow-[2px_2px_10px_0px_rgba(0,0,0,0)] hover:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[rgb(103,6,206)] to-[rgba(0,0,0)] hover:bg-gradient-to-b hover:from-[rgba(163,81,251)] hover:to-[rgba(17,24,29,0.8)]">
                                <a href="/" target="_blank" class="v2-home-open-card-wrapper w-inline-block w-[350px] p-6 flex items-start justify-center flex-col max-w-full bg-gradient-to-b from-[rgba(17,24,39,0.8)] to-[rgba(0,0,0,0.8)] hover:bg-gradient-to-b hover:from-[rgba(17,24,39,0.7)] hover:to-[rgba(0,0,0,0.6)]" >
                                    <div class="v2-home-open-card-title flex gap-1">
                                        <div class="v2-home-open-card-title-robo text-purple-400 text-lg font-normal opacity-60">roboflow /</div>
                                        <div class="v2-home-open-card-title-repo text-coolgray-50 text-[20px] font-medium text-right">supervision</div>
                                    </div>
                                    <div class="v2-home-open-card-desc text-coolgray-400 opacity-80 text-left text-sm font-light no-underline mt-2">A range of utilities to help integrate computer vision into your application, covering functions from annotation to object tracking.</div>
                                    <div class="div-block-236-copy-copy flex gap-3 mt-2">
                                        <div class="v2-home-open-card-subinfo-wrapper flex gap-2 items-center justify-start text-coolgray-400 text-sm">
                                            <div class="v2-home-open-card-icon w-embed">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.16572 0.375C6.38057 0.375 6.55244 0.503906 6.63838 0.675781L8.1208 3.70508L11.4079 4.19922C11.6013 4.2207 11.7517 4.34961 11.8161 4.54297C11.8806 4.73633 11.8376 4.92969 11.6872 5.08008L9.30244 7.44336L9.86104 10.7734C9.904 10.9668 9.81807 11.1816 9.66768 11.2891C9.4958 11.3965 9.28096 11.418 9.10908 11.332L6.16572 9.74219L3.24385 11.332C3.05049 11.418 2.85713 11.3965 2.68525 11.2891C2.53486 11.1602 2.44893 10.9668 2.49189 10.7734L3.05049 7.44336L0.665723 5.08008C0.515332 4.92969 0.472363 4.73633 0.536816 4.54297C0.60127 4.37109 0.75166 4.2207 0.94502 4.19922L4.23213 3.70508L5.71455 0.675781C5.80049 0.503906 5.97236 0.375 6.16572 0.375ZM6.16572 2.07227L5.04854 4.41406C4.9626 4.56445 4.83369 4.67188 4.66182 4.69336L2.12666 5.05859L3.95283 6.88477C4.08174 7.01367 4.14619 7.18555 4.10322 7.33594L3.67354 9.91406L5.92939 8.71094C6.07979 8.625 6.27314 8.625 6.42354 8.71094L8.67939 9.91406L8.24971 7.35742C8.20674 7.18555 8.27119 7.01367 8.4001 6.90625L10.2263 5.05859L7.69111 4.69336C7.51924 4.67188 7.39033 4.56445 7.30439 4.41406L6.16572 2.07227Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v2-home-open-card-subinfo">18.4k Stars</div>
                                        </div>
                                        <div class="v2-home-open-card-subinfo-wrapper flex gap-2 items-center justify-start text-coolgray-400 text-sm">
                                            <div class="v2-home-open-card-icon w-embed">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.71875 2.78125C2.08398 2.78125 2.40625 2.48047 2.40625 2.09375C2.40625 1.72852 2.08398 1.40625 1.71875 1.40625C1.33203 1.40625 1.03125 1.72852 1.03125 2.09375C1.03125 2.48047 1.33203 2.78125 1.71875 2.78125ZM3.4375 2.09375C3.4375 2.86719 2.92188 3.5332 2.23438 3.74805V4.5C2.23438 4.99414 2.59961 5.35938 3.09375 5.35938H6.53125C7.00391 5.35938 7.39062 4.99414 7.39062 4.5V3.74805C6.68164 3.5332 6.1875 2.86719 6.1875 2.09375C6.1875 1.14844 6.93945 0.375 7.90625 0.375C8.85156 0.375 9.625 1.14844 9.625 2.09375C9.625 2.86719 9.10938 3.5332 8.42188 3.74805V4.5C8.42188 5.55273 7.5625 6.39062 6.53125 6.39062H5.32812V8.02344C6.01562 8.23828 6.53125 8.9043 6.53125 9.65625C6.53125 10.623 5.75781 11.375 4.8125 11.375C3.8457 11.375 3.09375 10.623 3.09375 9.65625C3.09375 8.9043 3.58789 8.23828 4.29688 8.02344V6.39062H3.09375C2.04102 6.39062 1.20312 5.55273 1.20312 4.5V3.74805C0.494141 3.5332 0 2.86719 0 2.09375C0 1.14844 0.751953 0.375 1.71875 0.375C2.66406 0.375 3.4375 1.14844 3.4375 2.09375ZM7.90625 2.78125C8.27148 2.78125 8.59375 2.48047 8.59375 2.09375C8.59375 1.72852 8.27148 1.40625 7.90625 1.40625C7.51953 1.40625 7.21875 1.72852 7.21875 2.09375C7.21875 2.48047 7.51953 2.78125 7.90625 2.78125ZM5.5 9.65625C5.5 9.29102 5.17773 8.96875 4.8125 8.96875C4.42578 8.96875 4.125 9.29102 4.125 9.65625C4.125 10.043 4.42578 10.3438 4.8125 10.3438C5.17773 10.3438 5.5 10.043 5.5 9.65625Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v2-home-open-card-subinfo">1.4k Forks</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="v2-open-card-gradient-wrapper rounded-lg shadow-[2px_2px_10px_0px_rgba(0,0,0,0)] hover:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[rgb(103,6,206)] to-[rgba(0,0,0)] hover:bg-gradient-to-b hover:from-[rgba(163,81,251)] hover:to-[rgba(17,24,29,0.8)] transition-all duration-700">
                                <a href="/" target="_blank" class="v2-home-open-card-wrapper w-inline-block w-[350px] p-6 flex items-start justify-center flex-col max-w-full bg-gradient-to-b from-[rgba(17,24,39,0.8)] to-[rgba(0,0,0,0.8)] hover:bg-gradient-to-b hover:from-[rgba(17,24,39,0.7)] hover:to-[rgba(0,0,0,0.6)] transition-all duration-700" >
                                    <div class="v2-home-open-card-title flex gap-1">
                                        <div class="v2-home-open-card-title-robo text-purple-400 text-lg font-normal opacity-60">roboflow /</div>
                                        <div class="v2-home-open-card-title-repo text-coolgray-50 text-[20px] font-medium text-right">supervision</div>
                                    </div>
                                    <div class="v2-home-open-card-desc text-coolgray-400 opacity-80 text-left text-sm font-light no-underline mt-2">A range of utilities to help integrate computer vision into your application, covering functions from annotation to object tracking.</div>
                                    <div class="div-block-236-copy-copy flex gap-3 mt-2">
                                        <div class="v2-home-open-card-subinfo-wrapper flex gap-2 items-center justify-start text-coolgray-400 text-sm">
                                            <div class="v2-home-open-card-icon w-embed">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.16572 0.375C6.38057 0.375 6.55244 0.503906 6.63838 0.675781L8.1208 3.70508L11.4079 4.19922C11.6013 4.2207 11.7517 4.34961 11.8161 4.54297C11.8806 4.73633 11.8376 4.92969 11.6872 5.08008L9.30244 7.44336L9.86104 10.7734C9.904 10.9668 9.81807 11.1816 9.66768 11.2891C9.4958 11.3965 9.28096 11.418 9.10908 11.332L6.16572 9.74219L3.24385 11.332C3.05049 11.418 2.85713 11.3965 2.68525 11.2891C2.53486 11.1602 2.44893 10.9668 2.49189 10.7734L3.05049 7.44336L0.665723 5.08008C0.515332 4.92969 0.472363 4.73633 0.536816 4.54297C0.60127 4.37109 0.75166 4.2207 0.94502 4.19922L4.23213 3.70508L5.71455 0.675781C5.80049 0.503906 5.97236 0.375 6.16572 0.375ZM6.16572 2.07227L5.04854 4.41406C4.9626 4.56445 4.83369 4.67188 4.66182 4.69336L2.12666 5.05859L3.95283 6.88477C4.08174 7.01367 4.14619 7.18555 4.10322 7.33594L3.67354 9.91406L5.92939 8.71094C6.07979 8.625 6.27314 8.625 6.42354 8.71094L8.67939 9.91406L8.24971 7.35742C8.20674 7.18555 8.27119 7.01367 8.4001 6.90625L10.2263 5.05859L7.69111 4.69336C7.51924 4.67188 7.39033 4.56445 7.30439 4.41406L6.16572 2.07227Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v2-home-open-card-subinfo">18.4k Stars</div>
                                        </div>
                                        <div class="v2-home-open-card-subinfo-wrapper flex gap-2 items-center justify-start text-coolgray-400 text-sm">
                                            <div class="v2-home-open-card-icon w-embed">
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.71875 2.78125C2.08398 2.78125 2.40625 2.48047 2.40625 2.09375C2.40625 1.72852 2.08398 1.40625 1.71875 1.40625C1.33203 1.40625 1.03125 1.72852 1.03125 2.09375C1.03125 2.48047 1.33203 2.78125 1.71875 2.78125ZM3.4375 2.09375C3.4375 2.86719 2.92188 3.5332 2.23438 3.74805V4.5C2.23438 4.99414 2.59961 5.35938 3.09375 5.35938H6.53125C7.00391 5.35938 7.39062 4.99414 7.39062 4.5V3.74805C6.68164 3.5332 6.1875 2.86719 6.1875 2.09375C6.1875 1.14844 6.93945 0.375 7.90625 0.375C8.85156 0.375 9.625 1.14844 9.625 2.09375C9.625 2.86719 9.10938 3.5332 8.42188 3.74805V4.5C8.42188 5.55273 7.5625 6.39062 6.53125 6.39062H5.32812V8.02344C6.01562 8.23828 6.53125 8.9043 6.53125 9.65625C6.53125 10.623 5.75781 11.375 4.8125 11.375C3.8457 11.375 3.09375 10.623 3.09375 9.65625C3.09375 8.9043 3.58789 8.23828 4.29688 8.02344V6.39062H3.09375C2.04102 6.39062 1.20312 5.55273 1.20312 4.5V3.74805C0.494141 3.5332 0 2.86719 0 2.09375C0 1.14844 0.751953 0.375 1.71875 0.375C2.66406 0.375 3.4375 1.14844 3.4375 2.09375ZM7.90625 2.78125C8.27148 2.78125 8.59375 2.48047 8.59375 2.09375C8.59375 1.72852 8.27148 1.40625 7.90625 1.40625C7.51953 1.40625 7.21875 1.72852 7.21875 2.09375C7.21875 2.48047 7.51953 2.78125 7.90625 2.78125ZM5.5 9.65625C5.5 9.29102 5.17773 8.96875 4.8125 8.96875C4.42578 8.96875 4.125 9.29102 4.125 9.65625C4.125 10.043 4.42578 10.3438 4.8125 10.3438C5.17773 10.3438 5.5 10.043 5.5 9.65625Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div class="v2-home-open-card-subinfo">1.4k Forks</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="w-[800px] h-[780px] bg-[radial-gradient(circle_farthest-side_at_50%_50%,_#a351fb,_rgba(255,255,255,0))] opacity-55 scale-y-[-0.6] absolute -top-14 right-0 bottom-auto left-auto z-0"></div>
                <div class="w-[800px] h-[780px] bg-[radial-gradient(circle_farthest-side_at_50%_50%,_#a351fb,_rgba(255,255,255,0))] opacity-[0.16] absolute inset-y-[6%] left-[-4%] z-0"></div>
            </div>
        </section>
    );
};

export default OpenSource;