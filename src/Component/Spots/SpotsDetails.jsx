import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import Useaxios from "../../Hooks/Useaxios";
import { FaCalendarAlt, FaFlagCheckered, FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";

const SpotsDetails = () => {
    const { id } = useParams();
    const [spotDetails, setSpotDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublice = Useaxios();

    useEffect(() => {
        axiosPublice
            .get(`/Spots/${id}`)
            .then((res) => {
                setSpotDetails(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Error fetching details:', err);
                setLoading(false);
            });
    }, [id, axiosPublice]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="max-w-screen-xl mx-auto my-32">
            {spotDetails && (
                <div className="flex flex-col items-center justify-center">
                    <div className="flex-shrink-0 w-full md:w-[500px]">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src={spotDetails.image} // Displaying the main image
                            alt={`${spotDetails.placeName} Tour`} // Alt text based on place name
                        />
                    </div>
                    <div className="md:ml-12 mt-6 md:mt-0 text-center md:text-left">
                        <h1 className="text-3xl font-semibold text-gray-800 text-center py-2">{spotDetails.placeName}</h1> 
                        

                        <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start">
                            <div className="text-lg font-medium text-gray-800 flex items-center">
                                <FaMoneyBillAlt className="mr-2 text-green-500" />
                                <span className="font-semibold">Cost:</span> {spotDetails.price}
                            </div>
                            <div className="text-lg font-medium text-gray-800 flex items-center">
                                <FaFlagCheckered className="mr-2 text-yellow-500" />
                                <span className="font-semibold">Members:</span> {spotDetails.memberPerson} {/* Showing number of members */}
                            </div>
                            <div className="text-lg font-medium text-gray-800 flex items-center">
                                <FaCalendarAlt className="mr-2 text-blue-500" />
                                <span className="font-semibold">Days:</span> {spotDetails.days} Days {/* Showing number of days */}
                            </div>
                            <div className="text-lg font-medium text-gray-800 flex items-center">
                                <FaMapMarkerAlt className="mr-2 text-red-500" />
                                <span className="font-semibold">Location:</span> {spotDetails.placeName} {/* Showing place name again */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default SpotsDetails;