import React, { useEffect, useRef, useState } from 'react';

const videos = [
    {
      id: 'video-1',
      // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66de6f9567c5af6501d535c7_detect-and-track-objects-on-video%2B%281%29%2B%281%29-transcode.mp4',
      label: 'Detection',
    },
    {
      id: 'video-2',
      // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66de5e8c8945e61eaf09620e_walking-trace-and-corner-and-mask%20%281%29%20%282%29-transcode.mp4',
      label: 'Tracking',
    },
    {
      id: 'video-3',
      // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66cc83e20f0b4116036ea1b0_candy-1-transcode.mp4',
      label: 'Counting',
    },
    {
      id: 'video-4',
      // src: 'https://cdn.prod.website-files.com/5f6bc60e665f54545a1e52a5%2F66de5f2568b2ea306911ab8f_supervision-0190-promo%20%281%29%20%281%29-transcode.mp4',
      label: 'Analysis',
    },
  ];

const VideoCarousel = () => {
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
        <div className='v2-video-carousel v2-hero-video-carousel w-node-ac8c7820-012b-be4a-5192-d795e97c563a-94801e5c mt-5 flex flex-col items-center justify-center relative'>
            <div className='v2-carousel-video-wrap v2-hero-video flex items-center justify-center w-[1000px] max-w-[1000px] h-[400px] aspect-[16/9] rounded-3xl relative overflow-hidden'>
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
            {/* Buttons */}
            <div class="v2-btn-carousel-video-wrap-copy v2-hero-carousel-button -top-6 bg-white bg-opacity-70 flex left-0 transform-none gap-0 z-[2] border border-coolgray-200 bg-[#fff9] rounded-lg relative overflow-hidden">
                {videos.map((video, index) => (
                <button
                    key={video.id}
                    onClick={() => handleButtonClick(index)}
                    className={`v2-btn-carousel-video flex flex-col py-3 px-6 text-sm gap-1 backdrop-blur-[30px] bg-[#ffffff12] ${
                    currentVideo === index ? 'bg-coolgray-200 text-coolgray-600' : '#0000000f'
                    }`}
                >
                    {video.label}
                    <div className="progress-bar bg-coolgray-200 h-[2px] w-full overflow-hidden">
                        {currentVideo === index && (
                            <div
                            className="h-[2px] bg-coolgray-500"
                            style={{ width: `${progress}%` }}
                            ></div>
                        )}
                    </div>
                </button>
                ))}
            </div>
        </div>
    );
};

export default VideoCarousel;