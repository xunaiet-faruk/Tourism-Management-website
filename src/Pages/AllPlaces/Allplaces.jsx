import { FaRightLong } from "react-icons/fa6";


const Allplaces = () => {
    return (
        <div>   
              <section
            className="relative bg-cover bg-center h-[400px] flex "
            style={{
                backgroundImage: "url('https://i.ibb.co.com/H2ScKys/image.png')",
            }}
        >
            {/* Black Opacity Layer */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content on Top of the Banner */}
            <div className="relative z-10 text-white text-center flex gap-2 my-56 px-12">
                <h1 className="text-md font-bold mb-4">All Tourist Spot</h1>
                <FaRightLong className="mt-1" />
                <a href="/">  <h1 className="text-md font-bold mb-4 text-[#FB8E26] ">Home</h1></a>

            </div>
               </section>

               <div>
                <h1 className="font-serif font-semibold text-center text-[#FB8E26] text-5xl py-12">Here All Tour Spots</h1>
               
               <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto mb-32 gap-12">

                    <article className="flex transition hover:shadow-2xl  shadow-xl">
                        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                               
                                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                                <span>2022</span>
                                <span className="w-px flex-1 bg-gray-900/10"></span>
                                <span>Oct 10</span>
                            </time>
                        </div>

                        <div className="hidden sm:block sm:basis-56">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                className="aspect-square h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-gray-900">
                                        Finding the right guitar for your style - 5 tips
                                    </h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                                    atque dignissimos. Molestias explicabo corporis voluptatem?
                                </p>
                            </div>

                            <div className="sm:flex sm:items-end sm:justify-end">
                                <a
                                    href="#"
                                    className="block bg-[#FB8E26] text-white px-5 py-3 text-center text-xs font-bold uppercase  transition "
                                >
                                   View Details
                                </a>
                            </div>
                        </div>
                    </article>
                   

               </div>
               
               </div>
        </div>
    );
};

export default Allplaces;