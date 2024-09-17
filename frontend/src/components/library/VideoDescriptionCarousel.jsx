import React, { useEffect, useRef, useState } from 'react';

const videos = [
    {
      id: 'video-1',
      // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66e107edf2a621df65d39b10_workflows-transcode.mp4',
      label: 'Build Your Pipeline',
    },
    {
      id: 'video-2',
      // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66e10b70e93e729f0f48e5b1_Comp%202_2-transcode.mp4',
      label: 'Curate + Understand',
    },
    {
      id: 'video-3',
      // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66e107e1e93e729f0f4569f5_annotate-1_2-transcode.mp4',
      label: 'Label Collaboratively',
    },
    {
      id: 'video-4',
      // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66e10d02aa91640cac05d26f_Comp%203-transcode.mp4',
      label: 'Train + Evaluate',
    },
    {
        id: 'video-5',
        // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66e10e543ce5e024a663f8fe_Comp%204-transcode.mp4',
        label: 'Cloud + Edge Deploy'
    }
  ];

const VideoDescriptionCarousel = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [progress, setProgress] = useState(0);
    const videoRefs = useRef([]);

    useEffect(()=>{
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentVideo) {
                    video.play(); // Only play the current video
                } else {
                    video.pause(); // Pause the others
                    video.currentTime = 0; // Reset them to the start
                }
            }
        });
    },[currentVideo])

    const handleVideoEnd = ()=>{
        setCurrentVideo((prev)=>(prev+1)%videos.length);
    }

    const handleButtonClick = (index)=>{
        setCurrentVideo(index);
        setProgress(0)
    }

    const handleTimeUpdate = ()=>{
        const video = videoRefs.current[currentVideo]
        if (video){
            const progressPercentage = (video.currentTime / video.duration) * 100;
            setProgress(progressPercentage)
        }
    }
    return (
        <div className='v2-video-carousel v2-hero-video-carousel w-node-ac8c7820-012b-be4a-5192-d795e97c563a-94801e5c pt-20 flex flex-col items-center justify-center relative'>
            <div className='v2-carousel-video-wrap v2-hero-video flex items-center justify-center w-[1000px] max-w-[1000px] h-[625px] aspect-[16/9] rounded-3xl relative overflow-hidden'>
                {videos.map((video,index)=> (
                    <video
                    key={video.id}
                    ref={(el) => (videoRefs.current[index] = el)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      currentVideo === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={video.src}
                    // autoPlay
                    muted
                    loop={false}
                    onEnded={handleVideoEnd}
                    onTimeUpdate={handleTimeUpdate}
                  />
                ))}
            </div>

            <div className='max-w-[1298px] w-[1298px] px-6 flex items-center justify-start flex-col'>
                <div className='demo-placeholder w-full max-w-full pb-10'>
                    <div className='demo-desc-wrapper relative w-full'>
                        <div className='demo-buttons-wrapperr v2-bkg-gray-200 grid grid-cols-5 gap-0 place-content-start place-items-start w-full max-w-full h-14 absolute inset-[-56px_auto_auto_0] backdrop-blur-[5px] bg-[#ffffffb3] border-t border-l-[1.2px] border-r border-gray-200 rounded-t-md'>
                            {videos.map((video, index)=> (
                                <div id="w-node-_51beacbb-2e36-0a6a-0eae-940585a0dc67-94801e5c" onClick={()=>handleButtonClick(index)} class="v2-demo-btn v2-first-demo-tab v2-demo-tab-selected py-3 flex items-center justify-center w-full h-[56px] border-l border-[#e5e7eb] cursor-pointer">
                                    <div class="demo-tabs-text">{video.label}</div>
                                </div>
                            ))}
                        </div>
                        <div className='v2-demo-descriptions w-full h-[190px] bg-coolgray-50 block relative border rounded-bl-md rounded-br-md'>
                            <div class="demo-descripts curated relative rounded-2xl">
                                <div class="demo-button-wrap v2-bkg-coolgray-50 flex flex-col items-center justify-center gap-3 absolute inset-0 break-normal object-fill border-b border-l border-r border-coolgray-200 rounded-b-md w-auto pb-5">
                                    <div class="demo-curated v2-bkg-coolgray-50">
                                        <div class="demo-desc-wrappers">
                                            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/66e0a3110fe5bde389d8650f_cogs-home.svg" loading="lazy" alt="" class="v2-home-demo-icons cogs-home" />
                                            <div class="demo-col-text">Our integrated workflow builder and deployment infrastructure ensures what is configured can be deployed.</div>
                                        </div>
                                        <div class="demo-desc-wrappers">
                                            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/66e0a31110ad9c387f03946b_camera-home.svg" loading="lazy" alt="" class="v2-home-demo-icons camera-home" />
                                            <div class="demo-col-text">Deploy with a hosted API or to the edge with video streams or image data.</div>
                                        </div>
                                        <div class="demo-desc-wrappers">
                                            <img src="https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5/66e0a3119f3f67537e9e6a48_cubes-home.svg" loading="lazy" alt="" class="v2-home-demo-icons home-blocks-icon" />
                                            <div class="demo-col-text">Combine custom models, open source models, LLM APIs, pre-built logic, and external applications.</div>
                                        </div>
                                    </div>
                                    <a href="/workflows/build" class="workflows-cta demo-cta">Explore Workflows</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDescriptionCarousel;