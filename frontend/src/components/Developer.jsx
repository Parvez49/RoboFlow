import React from 'react';

const Developer = () => {
    return (
        <section className='flex items-center justify-center bg-white backdrop-blur-[15px] text-coolgray-600 pt-32 font-normal relative z-10'>
            <div className='w-layout-blockcontainer v2-container v2-home-developers-container w-container max-w-[1200px] static flex items-center justify-center mx-auto px-6'>
                <div className='dev-wrapper v2-developers-wrapper v2-bkg-coolgray-900 bg-coolgray-900 text-coolgray-400 flex flex-col items-center justify-center gap-8 static p-14 z-1 -mb-[300px] rounded-lg'>
                    <div class="v2-home-dev-title-wrapper flex flex-col gap-2 items-center justify-center" >
                        <h3 class="developers-title block text-white text-4xl font-medium">Designed for developers.</h3>
                        <div class="developers-subline font-normal w-[80%] text-center">Start running models in 2 minutes with Roboflow Inference, our open source, high-performance deployment solution.</div>
                    </div>
                    <div class="pip-wrapper v2-home-dev-pip flex gap-4 items-center justify-between py-2 pl-4 pr-3 border border-[#4b5563] bg-[#1f2937] rounded-lg">
                        <div class="terminal-copy v2-home-dev-pip-text text-coolgray-200 text-sm">pip install inference &amp;&amp; inference server start</div>
                        <div id="copy-install" class="copy-install-wrapper hover:bg-coolgray-400 hover:bg-opacity-25 rounded-lg p-2 text-white">
                            <div class="v2-home-dev-copy w-embed">
                                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10.375C10.9648 10.375 11.375 9.99219 11.375 9.5V3.92188C11.375 3.8125 11.3203 3.70312 11.2383 3.62109L9.37891 1.76172C9.29688 1.67969 9.1875 1.625 9.07812 1.625H6.125C5.63281 1.625 5.25 2.03516 5.25 2.5V9.5C5.25 9.99219 5.63281 10.375 6.125 10.375H10.5ZM11.8398 2.99219C12.0859 3.23828 12.25 3.59375 12.25 3.92188V9.5C12.25 10.4844 11.457 11.25 10.5 11.25H6.125C5.14062 11.25 4.375 10.4844 4.375 9.5V2.5C4.375 1.54297 5.14062 0.75 6.125 0.75H9.07812C9.40625 0.75 9.76172 0.914062 10.0078 1.16016L11.8398 2.99219ZM1.75 4.25H3.5V5.125H1.75C1.25781 5.125 0.875 5.53516 0.875 6V13C0.875 13.4922 1.25781 13.875 1.75 13.875H6.125C6.58984 13.875 7 13.4922 7 13V12.125H7.875V13C7.875 13.9844 7.08203 14.75 6.125 14.75H1.75C0.765625 14.75 0 13.9844 0 13V6C0 5.04297 0.765625 4.25 1.75 4.25Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='dev-console-wrapper v2-home-dev-code-wrapper border border-gray-700 rounded-lg flex overflow-hidden shadow-[0_2px_17.5px_rgba(189,127,255,0.33)]'>
                        <div className='terminal-wrapper h-[298px] flex flex-col border-r border-[#374151]'>
                            <div className='p-3 bg-coolgray-600'></div>
                            <div class="v2-home-dev-code-text-wrapper p-2 flex items-start justify-start gap-2 overflow-hidden">
                                <div class="code-numbers flex overflow-hidden">
                                    <div class="v2-home-dev-code-numbers text-left font-normal text-sm">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15</div>
                                </div>
                                <div id="dev-terminal" class="code-wrapper flex flex-col w-auto max-w-[350px] text-sm gap-4 text-coolgray-200">
                                    <div class="term-text-wrapper txt-1">from inference_sdk import InferenceHTTPClient</div>
                                    <div class="console-code-wrapper">
                                        <div class="term-text-wrapper txt-2">client = InferenceHTTPClient(</div>
                                        <div class="term-text-wrapper txt-3 pl-5">api_url="http://localhost:9001"</div>
                                        <div class="term-text-wrapper txt-4 pl-5">api_key="******"</div>
                                        <div class="term-text-wrapper txt-5">)</div>
                                    </div>
                                    <div class="console-code-wrapper flex flex-col">
                                        <div class="term-text-wrapper txt-6 flex items-start justify-start">with client.use_model(model_id="soccer-players-5fuqs/1"):</div>
                                        <div class="term-text-wrapper txt-7 pl-5 break-all">predictions = client.infer("https://media.roboflow.com/inference/soccer.mp4")</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="/" class="developer-button text-white bg-purboflow-500 hover:bg-purboflow-400 transition-colors duration-200 px-4 py-3 rounded-lg text-sm font-normal">View Documentation </a>
                </div>
            </div>
        </section>
    );
};

export default Developer;