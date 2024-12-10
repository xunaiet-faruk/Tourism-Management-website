import { useEffect, useState } from "react";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import Useaxios from "../../Hooks/Useaxios";
import { Link } from "react-router-dom";


const SpotsSection = () => {
    const [spots,setSpots]=useState([])
    const axiosPublice =Useaxios();

    useEffect(()=>{

        axiosPublice.get('/Spots')
        .then(res => setSpots(res.data))
    
    
    },[axiosPublice])
    return (
        <div>
            <div className="py-20">
                <h1 className="text-center text-[#FB8E26] uppercase text-5xl font-serif font-semibold ">We Offer Tourists Spots </h1>
            </div>

            <div className="max-w-screen-lg mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  mb-48">

                {
                    spots.map((item,index)=><div key={index} className="bg-gray-50 h-[320px] rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-400 hover:rounded-xl">

                        <div className="p-2">
                            <img className="w-full h-[180px] object-cover rounded-xl" src={item?.image} alt="" />
                    </div>
                    <div className="flex justify-between px-7">
                        <div className="flex gap-2 items-center">
                                <FaCalendarDays className="text-[#FB8E26]"/>
                                <p className="text-sm text-gray-500">{item?.days} days</p>
                        </div>
                        <div className="flex gap-1 items-center">
                                <IoPersonCircleSharp className="text-[#FB8E26]"/>
                                <p className="text-sm text-gray-500">{item?.memberPerson}</p>
                        </div>
                    </div>

                    <div>
                            <h4 className="text-xl font-serif text-center">{item?.placeName}</h4>
                          <div className="px-7 py-2">
                                <hr className="border border-gray-200" />
                          </div>
                    </div>

                    <div className="flex justify-between px-8 py-2">
                            <p className="text-xl text-[#FB8E26] font-serif font-semibold ">{item?.price}</p>
                            <div className="flex items-center justify-center gap-1 ">
                            <Link to={`/Spots/${item._id}`}>
                                    <button className="border-b rounded-xl border-[#FB8E26] py-1  px-5 hover:text-[#FB8E26]">View Details
                                  
                        </button>


                                </Link>  
                          
                    </div>
                    </div>

                    </div>)
                }

            </div>


        </div>
    );
};

export default SpotsSection;