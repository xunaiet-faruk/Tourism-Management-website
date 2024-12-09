

const Story = () => {
    return (
        <div className="mb-32 max-w-screen-xl mx-auto">
           <div className="flex justify-center">
            <div className="w-1/2 space-y-5">
                    <p className="text-[#FB8E26] text-xl font-semibold">Our Services</p>
                    <h2 className="text-5xl font-bold">Join The Adventure With <br/>Stories</h2>
                    <p className="text-gray-400 ">Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the industry's standard dummy text <br/> ever since the 1500s,</p>
            </div>
            <div className="relative">
                    <img className="w-[400px] rounded-full" src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/services-img1.webp" alt="" />
                    <div className="absolute -bottom-10 right-64">
                        <img className="w-[280px]" src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/services-img2.webp" alt="" />
                    </div>
           </div>
           </div>

      {/* ----------  icon card --------- */}

        <div className="flex -mt-44 gap-10 ml-[130px]">
            <div className="space-y-2">
                    <img className="w-[50px]" src="	https://html-templates.evonicmedia.com/adventurist/assets/images/icon/services-1.svg" alt="" />
                    <p className="text-xl font-semibold">Custom <br/> Destinations</p>
            </div>
                            <div className="space-y-2">
                    <img className="w-[50px]" src="	https://html-templates.evonicmedia.com/adventurist/assets/images/icon/services-3.svg" alt="" />
                    <p className="text-xl font-semibold">Unforgettable <br/> Moments</p>
            </div>
                            <div className="space-y-2">
                    <img className="w-[50px]" src="	https://html-templates.evonicmedia.com/adventurist/assets/images/icon/services-2.svg" alt="" />
                    <p className="text-xl font-semibold">Competitive <br/> Pricings</p>
            </div>
          
        </div>

                    <button type="button" className="mt-12 ml-[130px] relative inline-block h-12 w-42 overflow-hidden border-[#FB8E26] px-5 py-2 hover:text-white font-semibold text-[#FB8E26] shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full  before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#FB8E26] after:duration-500  before:hover:translate-x-0 after:hover:translate-x-0">See All Service</button>


        </div>
    );
};

export default Story;