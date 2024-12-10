import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFlagCheckered, FaRightLong } from 'react-icons/fa6';
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillAlt } from 'react-icons/fa';
import Loading from "../../Component/Loading";
const AllpagesDetails = () => {
    const { id } = useParams();
    const [spotDetails, setSpotDetails] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        axios
            .get(`http://localhost:5000/Addspots/${id}`)
            .then((res) => {
                setSpotDetails(res.data); 
                setLoading(false); 
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Error fetching details:', err);
                setLoading(false); 
            });
    }, [id]);

    if (loading) {
        return <Loading/>;
    }

    if (!spotDetails) {
        return <div>Spot not found</div>;
    }

    return (
        <div>
            <section
                className="relative bg-cover bg-center h-[400px] flex mb-12"
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/wdNRh9G/image.png')",
                }}
            >
                {/* Black Opacity Layer */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Content on Top of the Banner */}
                <div className="relative z-10 text-white text-center flex gap-2 my-56 px-12">
                    <h1 className="text-md font-bold mb-4"> Tourist Detils </h1>
                    <FaRightLong className="mt-1" />
                    <a href="/">  <h1 className="text-md font-bold mb-4 text-[#FB8E26] ">Home</h1></a>

                </div>
            </section>

            <div className="flex flex-col md:flex-row px-32 my-32">
                {/* Image Section */}
                <div className="flex-shrink-0 w-full md:w-[500px]">
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={spotDetails?.image}
                        alt={`${spotDetails?.spotsname} Tour`}
                    />
                </div>

                {/* Details Section */}
                <div className="md:ml-12 mt-6 md:mt-0 text-center md:text-left">
                    <h1 className="text-3xl font-semibold text-gray-800">{spotDetails?.name}</h1>
                    <p className="text-xl text-gray-600 mt-2">
                        {spotDetails?.spotsname} - {spotDetails?.location}
                    </p>
                    <p className="mt-4 text-lg text-gray-700">{spotDetails?.details}</p>

                    <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
                        <div className="text-lg font-medium text-gray-800 flex items-center">
                            <FaMoneyBillAlt className="mr-2 text-green-500" />
                            <span className="font-semibold">Cost:</span> ${spotDetails?.cost}
                        </div>
                        <div className="text-lg font-medium text-gray-800 flex items-center">
                            <FaFlagCheckered className="mr-2 text-yellow-500" />
                            <span className="font-semibold">Vacancy:</span> {spotDetails?.vacancy}
                        </div>
                        <div className="text-lg font-medium text-gray-800 flex items-center">
                            <FaCalendarAlt className="mr-2 text-blue-500" />
                            <span className="font-semibold">Year:</span> {spotDetails?.year} Year
                        </div>
                        <div className="text-lg font-medium text-gray-800 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-red-500" />
                            <span className="font-semibold">Country:</span> {spotDetails?.country}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllpagesDetails;
