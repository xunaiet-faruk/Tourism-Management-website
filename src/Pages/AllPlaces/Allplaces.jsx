import { FaRightLong } from "react-icons/fa6";
import Useaxios from "../../Hooks/Useaxios";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { PiHandshakeDuotone } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";


const Allplaces = () => {
    const axiosPublice =Useaxios()

    const [spots,setSpots] =useState([])

    useEffect(()=>{
        axiosPublice.get('/AddSpots')
        .then(res =>setSpots(res.data))
    },[axiosPublice])
    



 
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

                   {
                        spots.map((item, index) => <article key={index} className="flex transition hover:shadow-2xl  shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time

                                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                >
                                   <div className="flex gap-2">
                                       
                                        <PiHandshakeDuotone className="rotate-90" />
                                        <span>{item?.year}</span>

                                   </div>
                                    <span className="w-px flex-1 bg-gray-900/10"></span>
                                    <span>{item?.time} <span className="text-[8px] text-gray-400"> Days</span></span>
                                </time>
                            </div>

                            <div className="hidden sm:block sm:basis-56">
                                <img
                                    alt=""
                                    src={item?.image}
                                    className="aspect-square h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                    
                                        <div className="flex justify-between">
                                        <h3 className="font-bold uppercase text-gray-900">
                                            {item?.spotsname}
                                        </h3>
                                        <h3 className="text-sm text-gray-500">{item?.vacancy}</h3>
                                        </div>
                                 

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                        {item?.details}
                                    </p>
                                </div>

                                <div className="flex justify-between">

                                    <div className="flex items-center ">
                                        <TbCurrencyTaka className="text-lg"/>
                                        <span className="text-[#FB8E26] ">{item?.cost}</span>

                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <Link
                                            to={`/Addspots/${item._id}`}
                                            className="block bg-[#FB8E26] text-white px-5 py-3 text-center text-xs font-bold uppercase  transition "
                                        >
                                            View Details
                                        </Link>
                                    </div>

                                    </div>
                            </div>
                        </article>)
                   }
                   

               </div>
               
               </div>
        </div>
    );
};

export default Allplaces;