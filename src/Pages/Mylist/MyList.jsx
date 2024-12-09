import { FaRightLong } from "react-icons/fa6";
import Uselist from "../../Hooks/Uselist";
import { useContext } from "react";
import { AuthContext } from "../../Component/Provider/Authprovider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    if (!user?.email) {
        return <div>Loading... or Please login</div>;
    }

    const [spots] = Uselist();

    return (
        <div>
            <section
                className="relative bg-cover bg-center h-[400px] flex"
                style={{ backgroundImage: "url('https://i.ibb.co/kH4kfSg/image.png')" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-white text-center flex gap-2 my-56 px-12">
                    <h1 className="text-md font-bold mb-4">My List Spots</h1>
                    <FaRightLong className="mt-1" />
                    <a href="/">
                        <h1 className="text-md font-bold mb-4 text-[#FB8E26]">Home</h1>
                    </a>
                </div>
            </section>
            <div className="overflow-x-auto my-12 max-w-screen-xl mx-auto shadow-xl">
                {/* Table structure */}
                <table className="min-w-full border border-gray-200 bg-white shadow-xl">
                    <thead>
                        <tr className="h-[70px] border-b bg-[#ece5de] ">
                           
                            <th className="px-6 py-4 text-start">Place</th>
                            <th className="px-6 py-4 text-start">Country</th>
                            <th className="px-6 py-4 text-start">vacancy</th>
                            <th className="px-6 py-4 text-start">Cost</th>
                            <th className="px-6 py-4 text-start">Recover</th>
                            <th className="px-6 py-4 text-start">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping spots data */}
                        {spots.map((item, index) => (
                            <tr key={index} className="h-[70px] border-b  ">
                                
                                <td className="px-6 py-4 text-start">
                                    <img className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover" src={item.image} alt={item.spotsname} />
                                </td>
                                <td className="px-6 py-4 text-start">{item.country}</td>
                                <td className="px-6 py-4 text-start">{item.vacancy}</td>
                                
                                <td className="px-6 py-4 text-start">$ {item.cost}</td>
                                <td className="px-6 py-4 text-start">
                                    <button className="flex items-center rounded-full bg-[#FB8E26] px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                        Update
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-start">
                                    <button className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;