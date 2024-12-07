import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import video1 from '../../../public/35427-407130886_medium.mp4';
import video2 from '../../../public/47905-452168431_small.mp4';
import video3 from '../../../public/10745-226632884_medium.mp4';
import './Banner.css'
const Banner = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videos = [video1, video2, video3];

    // Handle Next Video
    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    // Handle Previous Video
    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    };

    // Automatically change video every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextVideo();
        }, 2000); // Automatically change video every 2 seconds

        // Cleanup interval when the component is unmounted or when the effect is changed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative max-w-screen-xl mx-auto">
            {/* Video Slide without fading out */}
            <div className="h-[630px] w-full overflow-hidden relative">
                <video
                    className="w-full h-full object-cover"
                    src={videos[currentVideo]}
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
            </div>

          <div className='absolute bottom-[250px] text-white space-y-7 left-[230px]'>
                <h1 className='text-4xl text-center font-semibold '>EXPLORE THE NEW  WORLD</h1>
                <p className='text-md text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et reprehenderit saepe minus nostrum maiores <br /> expedita porro0 , dolorum a. Vitae obcaecati adipisci maiores praesentium, iure nam. Illo doloremque veritatis inventore <br /> Et ullam nam numquam veniam. Aliquam, repellat ipsum eius dignissimos iure doloremque?</p>
         
         <div className='flex justify-center items-center'>
                  
        
                   <div>
                     <a
                        className="group  relative inline-block text-md font-medium text-white focus:outline-none focus:ring active:text-red-500"
                        href="#"
                    >
                        <span className="absolute inset-0 border border-current "></span>
                        <span
                            className="block border border-current  px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                        >
                           Discover 
                        </span>
                    </a>
                   </div>


                    <div className='flex justify-center items-center absolute left-[320px] bottom-4'>               
                        
                                <button className="button animate-pulse">
                            <p className="button__text ">
                                <span style={{ '--index': 0 }}> E</span>
                                <span style={{ '--index': 1 }}>X</span>
                                <span style={{ '--index': 2 }}>P</span>
                                <span style={{ '--index': 3 }}>P</span>
                                <span style={{ '--index': 4 }}>L</span>
                                <span style={{ '--index': 5 }}>O</span>
                                <span style={{ '--index': 6 }}>R</span>
                                <span style={{ '--index': 7 }}> </span>
                                <span style={{ '--index': 8 }}>M</span>
                                <span style={{ '--index': 9 }}>O</span>
                                <span style={{ '--index': 10 }}>R</span>
                                <span style={{ '--index': 11 }}> </span>
                                <span style={{ '--index': 12 }}>W</span>
                                <span style={{ '--index': 13 }}>E</span>
                                <span style={{ '--index': 14 }}>B</span>
                                <span style={{ '--index': 15 }}>S</span>
                                <span style={{ '--index': 16 }}>I</span>
                                <span style={{ '--index': 17 }}>T</span>
                            </p>

                            <div className="button__circle">
                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="button__icon"
                                    width="14"
                                >
                                    <path
                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        fill="currentColor"
                                    ></path>
                                </svg>

                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    width="14"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="button__icon button__icon--copy"
                                >
                                    <path
                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    </div>



     
                    
                    
                       </div>
         
         </div>

            {/* Left and Right Arrow Buttons */}
            <div className='flex gap-5 absolute bottom-12 right-12'>
                <div
                    onClick={prevVideo}
                    className='border-2 w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#FB8E26] cursor-pointer hover:text-white'>
                    <FaAngleLeft className='text-2xl font-bold' />
                </div>
                <div
                    onClick={nextVideo}
                    className='border-2 w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#FB8E26] cursor-pointer hover:text-white'>
                    <FaAngleRight className='text-2xl font-bold' />
                </div>
            </div>
        </div>
    );
};

export default Banner;
